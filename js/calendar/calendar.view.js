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

    this._init();
    this._render();
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
        onchange: this.handleMonthSelectChange
      },

      //  Calendar.MONTH_NAMES
      [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ].map((year, index) => createElement('option', {
        value: index,
      }, year))

    );

    this.prevMonthButton = createElement('button', {
      className: 'button',
      onclick: this.handleNextMonthButtonClick
    }, '<')

    this.nextMonthButton = createElement('button', {
      className: 'button',
      onclick: this.handleNextMonthButtonClick
    }, '>')

    this.tableHead = createElement('thead', null, 
    ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map( weekday => createElement( 'th', null, weekday)))

    this.tableBody = createElement('tbody', null);

    this.table = createElement('table', { className: 'table is-bordered' }, this.tableHead, this.tableBody
    )

    
  }

  _render() {
    const element = createElement('div', { id: 'calendar' },
      createElement( 'header', null,
        this.prevMonthButton,
        createElement('div', { className: 'select' }, this.monthSelect),
        createElement('div', { className: 'select' }, this.yearSelect),
        this.nextMonthButton,
      ),
      this.table
    );

    this.rootElement.appendChild(element)
  }

}