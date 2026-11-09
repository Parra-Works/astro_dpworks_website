---
name: Squash Changes
description: Squash all commits unique to the current branch into one commit and rewrite the message with a short summary plus a per-file, per-commit table. Use when the user asks to squash or runs /squash_changes.
---

# Squash Changes

Squash the commits unique to the current branch into one commit. Never push or force-push.

## Preconditions

- Require a clean working tree (`git status --short` must be empty). If it is dirty, stop and ask whether to commit or stash first; do not silently include uncommitted work.
- Determine the base branch: `main` when it exists, otherwise `master`, unless the user names another base.
- If `HEAD` is the base branch, or the commits are already pushed/shared, stop and ask for explicit confirmation before rewriting history.

## Workflow

1. Identify the commit range:

   ```sh
   git merge-base HEAD main
   git log --reverse --format='%h %s' <base>..HEAD
   ```

   If the range is empty, report that there is nothing to squash.

2. Record the current tree hash and collect every affected file with the commit that changed it:

   ```sh
   git rev-parse HEAD^{tree}
   git log --reverse --format='COMMIT %h %s' --name-status <base>..HEAD
   git diff --stat <base>..HEAD
   ```

   Build one table row per file/commit pair. If a file changed in multiple commits, list it once per commit.

3. Write the new message in Markdown:

   ```markdown
   # <short title>

   <Summary of all squashed changes, maximum two sentences.>

   ## Files changed

   | File | Commit | Change |
   | :--- | :--- | :--- |
   | `path/to/file` | `<short-hash> <subject>` | <one-line summary> |
   ```

   - Include every file changed across the range.
   - Summarize what changed, not why.

4. Squash without losing the working tree:

   ```sh
   git reset --soft <base>
   git commit -F - <<'EOF'
   # <short title>

   <summary>

   ## Files changed

   | File | Commit | Change |
   | :--- | :--- | :--- |
   | `path/to/file` | `<short-hash> <subject>` | <description> |
   EOF
   ```

5. Verify the rewrite:

   ```sh
   git log --oneline -1
   git status --short
   git rev-parse HEAD^{tree}
   ```

   The tree hash after the squash must match the tree hash recorded before it. If it differs, stop and report the mismatch.

## Rules

- One squashed commit per invocation.
- Never rewrite `main`/`master` or published history without explicit confirmation.
- Never use `git reset --hard`, `git clean`, or force-push.
- If the base branch or affected files are ambiguous, stop and ask.
