import React, { Component } from 'react';
import qs from 'qs';
import { withCookies, Cookies } from 'react-cookie';



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
      <div className="App" style={{ margin: '0px 200px' }}>
        <header className="App-header">
          <h1 className="App-title">Embedded React Test</h1>
        </header>
        <h4>data from cakephp</h4>
        {articles &&
          <dl>
            {articles.map((item) => {

              const id = item.id
              return <div key={id + 'div'}>
                <dt
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    fetch(this.props.baseurl + '/' + id,
                      {
                        method: 'DELETE',
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
                  key={id}>{item.title}</dt>
                <dd key={id + 'dd'}>{item.body}</dd></div>
            })}
          </dl>}
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
          <label htmlFor="title">
            Title <input name="title" />
          </label>
          <label htmlFor="body">
            Body <input name="body" />
          </label>
          <button
            style={{ 'margin-top': '15px'}}
            type="submit">Submit</button>
        </form>


      </div>
    );
  }
}

export default withCookies(App);
