# TODO: Add Caching for Projects and Other Data

## Steps to Complete

- [ ] Create new cache package `backend/internal/cache/cache.go` with in-memory caching using sync.Map and TTL expiration (5 minutes).
- [ ] Modify `backend/internal/handlers/handlers.go` to integrate caching:
  - Add cache checks in each handler (ProjectsHandler, ExperienceHandler, EducationHandler, SkillsHandler).
  - If cache hit and not expired, return cached data.
  - If cache miss or expired, query DB, encode to JSON, store in cache, and return data.
- [ ] Test the implementation by running the app and verifying reduced DB queries.
- [ ] Monitor and adjust TTL if necessary (optional).

## Notes
- Using standard library only, no new dependencies.
- Cache stores JSON strings for simplicity.
- TTL set to 5 minutes; suitable for portfolio data which doesn't change often.
