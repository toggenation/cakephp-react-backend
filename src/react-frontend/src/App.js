import React, { Component } from 'react';
import { withCookies } from 'react-cookie';



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}

  }


  sendFetch(method = 'GET', options = {}) {
    return fetch(this.props.baseurl,
      {
        method: method,
        mode: 'cors',
        credentials: "include",
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error(response.status + " james has an error " + response.statusText)
      }).catch((e) => {
        console.log(e)
      })
  }

  componentWillMount() {
    this.sendFetch().then((data) => {
      console.log('STATE', this.state)
      this.setState({
        ...this.state,
        ...data
      })
      console.log(this.state)
    })
  }
  render() {

    const { articles } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Embedded React Test</h1>
        </header>
        <h4>Data from CakePHP</h4>
        {articles &&
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((item) => {
                const id = item.id
                return (<tr
                  style={{ cursor: 'pointer' }}
                  title="Click to delete"
                  onClick={() => {
                    fetch(this.props.baseurl + '/' + id,
                      {
                        method: 'DELETE',
                        mode: 'cors',
                        credentials: "include",
                        headers: {
                          'X-CSRF-Token': window.csrfToken,
                          'X-Requested-With': 'XMLHttpRequest',
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                        }
                      }).then((response) => {
                        if (response.ok) {
                          return response.json()
                        }
                        throw new Error(response.status + " james has an error " + response.statusText)
                      })
                      .then((result) => {
                        this.sendFetch().then((data) => {
                          console.log('STATE', this.state)
                          this.setState({
                            ...this.state,
                            ...data
                          })
                          console.log(this.state)
                        })

                        console.log(result)
                      })
                      .catch((e) => {
                        console.log(e)
                      })

                  }}
                  key={id}><td>{item.title}</td>
                  <td key={id + 'dd'}>{item.body}</td>
                </tr>)

              })}
            </tbody>
          </table>}
        <div className="col p-3">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              fetch(this.props.baseurl,
                {
                  mode: 'cors',
                  method: 'POST',
                  cache: 'no-cache',
                  credentials: "include",
                  headers: {
                    'X-CSRF-Token': window.csrfToken,
                    'X-Requested-With': 'XMLHttpRequest',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    user_id: 1,
                    title: e.target.elements.title.value,
                    body: e.target.elements.body.value
                  }),
                }
              ).then((response) => {
                if (response.ok) {

                  this.sendFetch().then((data) => {
                    console.log('STATE', this.state)
                    this.setState({
                      ...this.state,
                      ...data
                    })
                    console.log(this.state)
                  })
                  return response.json()

                }
                throw new Error(response.status + "HI" + response.statusText)
              }).catch((e) => console.log(e))

              console.log(e.target.elements.title.value)
              console.log(e.target.elements.body.value)
              e.target.reset();

            }
            }
          >
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title <input name="title" className="form-control" />
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="body" className="form-label">
                Body <input className="form-control" name="body" />
              </label>
            </div>

            <button
              style={{ 'margin-top': '15px' }}
              className="btn btn-secondary"
              type="submit">Submit</button>
          </form>

        </div>
      </div>
    );
  }
}

export default withCookies(App);
