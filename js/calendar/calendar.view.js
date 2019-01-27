import createElement from '../dom.js'

export default class CalendarView {
  constructor(calendar, rootElement) {
    this.calendar = calendar;
    this.rootElement = rootElement;

    this.yearSelect = null;
    this.monthSelect = null;
    this.prevMonthButton = null;
    this.nextMonthButton = null;

    this.table = null;
    this.tableHead = null;
    this.tableBody = null;

    this.handleMonthSelectChange = this.handleMonthSelectChange.bind(this);
    this.handleYearSelectChange = this.handleYearSelectChange.bind(this);
    this.handlePrevMonthButtonClick = this.handlePrevMonthButtonClick.bind(this);
    this.handleNextMonthButtonClick = this.handleNextMonthButtonClick.bind(this);

    this._init();
    this._render();
    this._update();
  }

  get year() {
    return Number(this.yearSelect.value);
  }

  get month() {
    return Number(this.monthSelect.value);
  }

  handleMonthSelectChange() {
    this._update();
  }

  handleYearSelectChange() {
    this._update();
  }

  handlePrevMonthButtonClick() {
    this._update();
  }

  handleNextMonthButtonClick() {
    this._update();
  }


  _init() {

    this.monthSelect = createElement('select', {
        onchange: this.handleMonthSelectChange
      },

      //  Calendar.MONTH_NAMES
      ["Январь", "Февраль", "Март"].map((name, index) => createElement('option', {
        value: index,
      }, name))

    );

    this.yearSelect = createElement('select', {
        onchange: this.handleYearSelectChange
      },

      //  Calendar.MONTH_NAMES
      [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020].map(
        (year, index) => createElement('option', {
          value: index,
        }, year))
    );

    this.prevMonthButton = createElement('button', {
      className: 'button',
      onclick: this.handlePrevMonthButtonClick
    }, '<')

    this.nextMonthButton = createElement('button', {
      className: 'button',
      onclick: this.handleNextMonthButtonClick
    }, '>')

    this.tableHead = createElement('thead', null,
      ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(weekday => createElement('th', null, weekday)))

    this.tableBody = createElement('tbody', null);

    this.table = createElement('table', {
      className: 'table is-bordered'
    }, this.tableHead, this.tableBody)


  }

  _render() {
    const element = createElement('div', {
        id: 'calendar'
      },
      createElement('header', null,
        this.prevMonthButton,
        createElement('div', {
          className: 'select'
        }, this.monthSelect),
        createElement('div', {
          className: 'select'
        }, this.yearSelect),
        this.nextMonthButton,
      ),
      this.table
    );

    this.rootElement.appendChild(element)
  }

  _update() {
    const month = this.calendar.getMonthDate(this.year, this.month);

    const tableBody = createElement(
      'tbody',
      null,
      month.map(
        week => createElement(
          'tr',
          null,
          week.map(date => createElement('td', null, date))
        )
      )
    );

    this.table.replaceChild(tableBody, this.tableBody);
    this.tableBody = tableBody;
  }

}