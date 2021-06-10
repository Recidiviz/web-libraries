#!/usr/bin/env bash
DEPENDENT_PROJECT=$1
if [ -d $DEPENDENT_PROJECT ]; then
  echo "Linking design-system to ${DEPENDENT_PROJECT} for development"
else
  echo "Error: Directory ${DEPENDENT_PROJECT} does not exist"
  exit 1
fi
yarn
yarn link
pwd
pushd node_modules
pushd react; yarn link; popd
pushd react-modal; yarn link; popd
popd
cd $1
yarn link @recidiviz/design-system react react-modal
