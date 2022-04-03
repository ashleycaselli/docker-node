let publishCmd = `
docker build --build-arg NODE_VERSION="$NODE_VERSION" --build-arg DOCKER_VERSION="$DOCKER_VERSION" -t "$REGISTRY/$IMAGE_NAME:\${nextRelease.version}" -t "$REGISTRY/$IMAGE_NAME:latest" .
docker push --all-tags "$REGISTRY/$IMAGE_NAME"
`
let config = require('semantic-release-preconfigured-conventional-commits');
config.plugins.push(
    [
        "@semantic-release/exec",
        {
            "publishCmd": publishCmd
        }
    ],
    "@semantic-release/github",
    "@semantic-release/git"
)
module.exports = config