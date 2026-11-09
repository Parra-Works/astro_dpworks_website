---
name: Squash Merge
description: Commit pending changes, squash the current branch's commits into one, then merge into main and stay on main. Use when the user asks to squash and merge or runs /squash_merge.
---

# Squash Merge

Commit pending work, squash the branch, and merge it into `main`. Never push or force-push.

## Preconditions

- Confirm the current branch is not `main`. If it is, stop and report that there is no branch to merge.
- Confirm `main` exists. If it does not, stop and ask which base to use.

## Workflow

1. Check for pending changes:

   ```sh
   git status --short
   git branch --show-current
   ```

   If the working tree is dirty, load and follow the `commit-changes` skill (`/commit_changes`) first. Do not continue until the tree is clean.

2. Load and follow the `squash-changes` skill (`/squash_changes`) to squash the current branch into one commit.
   - Record the branch name before switching branches.

3. Merge the squashed branch into `main` and stay there:

   ```sh
   git switch main
   git merge --ff-only <branch>
   ```

   - If the fast-forward merge fails, stop and report it. Do not create a merge commit unless the user asks.

4. Verify the result:

   ```sh
   git status --short
   git branch --show-current
   git log --oneline -3
   ```

## Rules

- Finish on `main` with a clean working tree.
- Never push, force-push, or rewrite `main` without explicit confirmation.
- Do not delete the merged branch unless the user asks.
- If the branch, base, or affected files are ambiguous, stop and ask.
