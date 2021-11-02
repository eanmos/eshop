const book = [
  {
    cover: 'https://img3.labirint.ru/rc/92079d72d75894eba6fdd89f98d67ed3/246x330/books83/826283/cover.jpg?1633584332',
    title: 'Сварог. Нежный взгляд волчицы. Замок без ключа',
    author: 'Бушков Александр Александрович',
    currentPrice: 399,
    oldPrice: 499,
    discount: {
      percent: 30,
      duration: 4
    }
  },
  {
    cover: 'https://img3.labirint.ru/rc/b844f93223cef7fbd847d6240c527850/246x330/books77/767923/cover.jpg?1601011509',
    title: 'Мессия Дюны. Дети Дюны',
    author: 'Герберт Фрэнк',
    currentPrice: 846,
    oldPrice: 1290,
    discount: {
      percent: 22,
      duration: 2
    }
  },
  {
    cover: 'https://img3.labirint.ru/rc/ae064c8395405d3181783ec91e5c02ef/246x330/books57/564067/cover.png?1575458855',
    title: 'Двадцать тысяч лье под водой',
    author: 'Верн Жюль',
    currentPrice: 338,
  },
  {
    cover: 'https://img3.labirint.ru/rc/dd61a19c4525e047bdd63a039e4e98ff/246x330/books83/828497/cover.jpg?1635089128',
    title: 'Актея',
    author: 'Александр Дюма',
    currentPrice: 508,
    oldPrice: 651,
    discount: {
      percent: 10,
      duration: 3
    }
  },
  {
    cover: 'https://img4.labirint.ru/rc/8f654d534ce2c62b4bbf10973474d479/220x340/books83/822874/cover.jpg?1631683578',
    title: 'Основание',
    author: 'Айзек Азимов',
    currentPrice: 538,
  },
  {
    cover: 'https://img4.labirint.ru/rc/f56d6c73e043f2b20b0ea13ca18a93f2/246x330/books82/819570/cover.jpg?1629959203',
    title: 'Звёздные войны. Расцвет Республики. Свет джедаев',
    author: 'Соул Чарльз',
    currentPrice: 894,
    oldPrice: 1454,
    discount: {
      percent: 43,
      duration: 2
    }
  },
  {
    cover: 'https://img4.labirint.ru/rc/ffb453b0ba2808cb3eff37b95d170284/246x330/books84/830216/cover.jpg?1635398731',
    title: 'Зона Питер. На одной волне',
    author: 'Нуждин Андрей Станиславович',
    currentPrice: 583,
    oldPrice: 988,
    discount: {
      percent: 14,
      duration: 3
    }
  },
  {
    cover: 'https://img3.labirint.ru/rc/1a902da889693fc5cdaf30c1c29cc1ef/246x330/books82/819575/cover.jpg?1629959210',
    title: 'Марсианские хроники',
    author: 'Брэдбери Рэй',
    currentPrice: 538,
  },
  {
    cover: 'https://img3.labirint.ru/rc/5b67f33db50e7900c912cbd3c64430ed/246x330/books84/830135/cover.jpg?1635398718',
    title: 'Целитель Галактики',
    author: 'Дик Филип Киндред',
    currentPrice: 445,
    oldPrice: 570,
    discount: {
      percent: 7,
      duration: 4
    }
  },
  {
    cover: 'https://img4.labirint.ru/rc/345f8ad6f62f8c6208041b8a0e83f23f/246x330/books84/830132/cover.jpg?1635398715',
    title: 'Земля матерей',
    author: 'Бьюкес Лорен',
    currentPrice: 529
  },
]

const Router = window.ReactRouterDOM.BrowserRouter
const Route = window.ReactRouterDOM.Route
const Link = window.ReactRouterDOM.Link
const Prompt = window.ReactRouterDOM.Prompt
const Switch = window.ReactRouterDOM.Switch
const Redirect = window.ReactRouterDOM.Redirect
const IndexRoute = window.ReactRouterDOM.IndexRoute

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/genres/fantasy" component={GenreFantasy} />
      </Router>
    )
  }
}

class Other extends React.Component {
  render() {
    return (
      <div>Other</div>
    )
  }
}

class Main extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
      </div>
    )
  }
}

class SidebarHeader extends React.Component {
  render() {
    return (
      <div className="SidebarHeader">
        { this.props.label }
      </div>
    )
  }
}

class SidebarEntry extends React.Component {
  render() {
    return (
      <Link className="SidebarEntryLink" to={this.props.path}>
        <div className={this.props.border === "none" ? "SidebarEntry NoBorder": "SidebarEntry"}>
          <span className="Label">
            { this.props.label }
          </span>
        </div>
      </Link>
    )
  }
}

class Sidebar extends React.Component {
  render() {
    return (
      <div className="Sidebar">
        <SidebarHeader label="Книги для детей" />

        <SidebarEntry label="Детская художественная литература" path="/" />
        <SidebarEntry label="Позновательная литература для детей" path="/" border="none" />

        <SidebarHeader label="Нехудожественная литература" />

        <SidebarEntry label="Бизнес. Экономика" path="/" />
        <SidebarEntry label="Информационные технологии" path="/" />
        <SidebarEntry label="История" path="/" />
        <SidebarEntry label="Культура. Искусство" path="/" />
        <SidebarEntry label="Философские науки" path="/" border="none" />

        <SidebarHeader label="Художественная литература" />

        <SidebarEntry label="Детективы" path="/" />
        <SidebarEntry label="Историческая проза" path="/" />
        <SidebarEntry label="Классическая проза" path="/" />
        <SidebarEntry label="Фэнтези" path="/genres/fantasy" />
        <SidebarEntry label="Научная фантастика" path="/" />
        <SidebarEntry label="Приключения" path="/" border="none" />
      </div>
    )
  }
}

class GenreFantasy extends React.Component {
  render() {
    return (
      <div className="GenrePath">
        <Sidebar />
        <BookShowcase />
      </div>
    )
  }
}

class BookShowcase extends React.Component {
  render() {
    return (
      <div className="BookShowcase">
      {
        book.map((e, i) => <Book book={e} key={i} />)
      }
      </div>
    )
  }
}

class LikeButton extends React.Component {
  constructor() {
    super()
    this.state = { hover: false }
  }

  hoverOn(e) {
    console.log(e)
    e.setState({ hover: true })
  }

  hoverOff(e) {
    console.log(e)
    e.setState({ hover: false })
  }

  render() {
    if (this.state.hover === false) {
      return ( <i className="LikeButton far fa-heart" onMouseOver={this.hoverOn}></i>)
    } else {
      return ( <i className="LikeButton fas fa-heart" onMouseOut={this.hoverOff}></i>)
    }
  }
}

class AddToCartButton extends React.Component {
  render() {
    return (
      <button className="AddToCartButton">В корзину</button>
    )
  }
}

class Book extends React.Component {
  render() {
    return (
      <div className="Book">
        <img src={this.props.book.cover} />
        <div className="price">
          <span className="currentPrice">{this.props.book.currentPrice} ₽</span>

          {
            (() => {
              if (this.props.book.oldPrice)
                return ( <span className="oldPrice">{this.props.book.oldPrice}</span> )
            })()
          }
        </div>
          {
            (() => {
              if (this.props.book.discount)
                return (
                  <div className="discount">
                    <span className="percent">{ "−" + this.props.book.discount.percent + "%" }</span>
                    <span className="duration">{ "ЕЩЕ " + this.props.book.discount.duration + " ДНЯ" }</span>
                  </div>
                )
            })()
          }
        <div className="title">
          {this.props.book.title}
        </div>
        <div className="author">
          {this.props.book.author}
        </div>
        <div className="actions">
          <AddToCartButton />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
