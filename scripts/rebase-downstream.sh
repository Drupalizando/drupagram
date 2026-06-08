#!/usr/bin/env bash
# Rebases all downstream module branches after a fix on a base branch.
#
# Usage: ./scripts/rebase-downstream.sh <fixed-branch> <old-tip>
# Example: After fixing a bug on modulo-02, run:
#   ./scripts/rebase-downstream.sh modulo-02 abc1234
#
# Where abc1234 is the old tip of modulo-02 before your fix commit.

set -e

BASE_BRANCH="$1"
OLD_TIP="$2"

if [ -z "$BASE_BRANCH" ] || [ -z "$OLD_TIP" ]; then
  echo "Usage: $0 <fixed-branch> <old-tip-sha>"
  exit 1
fi

BRANCHES=(
  modulo-00
  modulo-01
  modulo-02
  modulo-03
  modulo-04
  modulo-05
  modulo-06
  modulo-07
  modulo-08
  modulo-09
  modulo-10
  modulo-11
  modulo-12
  modulo-bonus
  main
)

# Find index of the fixed branch
START_IDX=-1
for i in "${!BRANCHES[@]}"; do
  if [ "${BRANCHES[$i]}" = "$BASE_BRANCH" ]; then
    START_IDX=$i
    break
  fi
done

if [ "$START_IDX" -eq -1 ]; then
  echo "Error: branch '$BASE_BRANCH' not found in branch list."
  exit 1
fi

echo "Rebasing branches downstream of $BASE_BRANCH..."

PREV_BRANCH="$BASE_BRANCH"
for i in $(seq $((START_IDX + 1)) $((${#BRANCHES[@]} - 1))); do
  BRANCH="${BRANCHES[$i]}"
  echo "  Rebasing $BRANCH onto $PREV_BRANCH..."
  git checkout "$BRANCH"
  git rebase --onto "$PREV_BRANCH" "$OLD_TIP" "$BRANCH"
  OLD_TIP=$(git rev-parse HEAD~1 2>/dev/null || git rev-parse HEAD)
  PREV_BRANCH="$BRANCH"
done

echo "Done. Force-push all branches with:"
echo "  git push --force-with-lease origin modulo-00 modulo-01 modulo-02 modulo-03 modulo-04 modulo-05 modulo-06 modulo-07 modulo-08 modulo-09 modulo-10 modulo-11 modulo-12 modulo-bonus main"
