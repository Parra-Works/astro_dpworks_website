---
name: Commit Changes
description: Commit current repository changes with a Markdown message containing a short summary and a table of affected files. Use when the user asks to commit or runs /commit_changes.
---

# Commit Changes

Create one commit for the current changes. Do not amend, rebase, or push unless explicitly asked.

## Workflow

1. Inspect the working tree with `git status --short`, `git diff`, and `git diff --cached`.
   - Identify only the files that belong to the requested change.
   - If there are no changes, stop and report that the tree is clean.
2. Verify the change when the project defines the scripts: run `npm run check` and `npm run build`.
   - If verification fails, stop and report the failure instead of committing.
3. Stage the affected files explicitly by path. Do not use `git add -A` or `git add .`.
4. Write the commit message in Markdown using exactly this shape:

   ```markdown
   # <short title>

   <Quick summary of the changes, maximum two sentences.>

   ## Files changed

   | File | Change |
   | :--- | :--- |
   | `path/to/file` | One-line description of the change. |
   ```

   - Keep the summary to two sentences or fewer.
   - List every affected file in the table.
   - Describe what changed, not why.
5. Commit with a heredoc so Markdown and backticks survive the shell:

   ```sh
   git commit -F - <<'EOF'
   # <short title>

   <summary>

   ## Files changed

   | File | Change |
   | :--- | :--- |
   | `path/to/file` | <description> |
   EOF
   ```

6. Confirm with `git status --short` and `git log -1 --oneline`.

## Rules

- One commit per invocation.
- Include only files changed for the current task. Ask if the affected files are ambiguous.
- Never commit secrets, `.env` files, credentials, build output, or dependencies.
