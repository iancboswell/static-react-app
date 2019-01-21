#!/usr/bin/env sh

# Clean out deploy build folder
rm -rf appengine/build

# Build the app
npm run build

# Copy the build folder into the appengine deploy dir
cp -r build appengine

# Deploy the app
# NB: Specify --project [project-id] here if you're working with multiple
# gcloud projects.
gcloud app deploy appengine/app.yaml
