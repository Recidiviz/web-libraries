#!/usr/bin/env bash
DEPENDENT_PROJECT=$1
if [ -d $DEPENDENT_PROJECT ]; then
  echo "Unlinking design-system from ${DEPENDENT_PROJECT}"
else
  echo "Error: Directory ${DEPENDENT_PROJECT} does not exist"
  exit 1
fi
pushd $1
yalc remove @recidiviz/design-system
yarn

