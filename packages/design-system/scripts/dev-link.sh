#!/usr/bin/env bash
DEPENDENT_PROJECT=$1
if [ -d $DEPENDENT_PROJECT ]; then
  echo "Linking design-system to ${DEPENDENT_PROJECT} for development"
else
  echo "Error: Directory ${DEPENDENT_PROJECT} does not exist"
  exit 1
fi
cd $1
yalc add --link @recidiviz/design-system
yarn
