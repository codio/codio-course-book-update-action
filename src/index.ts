import * as core from '@actions/core'
import bent from 'bent'


const main = async () => {
  try {
    const token = core.getInput('token', { required: true })
    const courseId = core.getInput('course-id', { required: true })
    const bookId = core.getInput('book-id', { required: false })
    const domain = core.getInput('domain', { required: false })

    const authHeaders = {
      'Authorization': 'Bearer ' + token
    }

    const api = bent(`https://octopus.${domain}`, 'POST', 'json', 200)

    const request = {}
    if (bookId) {
      request['bookId'] = bookId
    }
    const res = await api(`/api/v1/courses/${courseId}/update_books`, request, authHeaders)
    console.log(res)
    console.log('publish Completed')

  } catch (error) {
    console.log(error)
    core.setFailed(error.message)
  }
}

main()