# ClarivateAssessment

Responsive
Offline
storybook

docker build -t clarivate-assesment .
docker run -p 3000:3000 clarivate-assesment
npx nx e2e --skip-nx-cache
npx nx storybook --skip-nx-cache
