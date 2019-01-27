export default class Calendar {
  constructor() {
    
  }

  static getDaysInMonth(year, month) {

  }

  getMonthDate(year, month) {
    const daysInMonth = Calendar.getDaysInMonth(year, month);

    return [
      [undefined, undefined, 1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24, 25, 26],
      [27, 28, 29, 30, undefined, undefined]
    ];
  }

}

Calendar.DAYS_IN_MONTH