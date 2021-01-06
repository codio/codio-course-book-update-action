# Codio Course Book action

Update course assignement to use latest version of the book

# Usage

See [action.yml](action.yml)


```yaml
steps:

- uses: codio/codio-course-book-update-action
  with:
    token: api-token
    course-id: my-course-id
    book-id: my-assignment-id
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)