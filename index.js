/**
 * @author ashish.vaghasiya
 * @version 1.0
 */

// Day of Week [0-6]
// Calendar Week of Month  [1-6]
// Week of Year [1-52]
// Month of Quarter   [1-3]
// Month of Year [1-12]
// Quarter of Year [1-4]

! function() {
  if (typeof require === "function") {
    assertHelper = require("./assertHelper");
  }
  "use strict";
  var DateLibrary = {
    version: "0.0.0"
  };


  /* getDayOfWeek function start */
  DateLibrary.getDayOfWeek = function(inputDate, input) {
    // get operationType and convert into lower case
    var operationType = getOperationTypeValue(input.operationType);
    /* operationType switch start */
    switch (operationType) {
      /* Day_of_Week case start */
      case DateLibrary.OperationType.Day_of_Week:
        // call getDayOfWeek function and return value
        return getDayOfWeek(inputDate);
        break;
        /* Day_of_Week case start */

        /* Day_Number_of_Week case start */
      case DateLibrary.OperationType.Day_Number_of_Week:
        //  check validation of week name
        if (validateWeekName(input.startDayOfWeek)) {
          // call getDayNumberOfWeek function and return value
          return getDayNumberOfWeek(inputDate, (input.startDayOfWeek.toTitleCase()))
        } else {
          console.error("startDayOfWeek is not valid");
        }
        break;
        /* Day_Number_of_Week case end */

        /* default case start */
      default:
        console.error("operationType not match");
        break;
        /* default case end */

    } /* operationType switch end */
    return -1;
  }; /* getDayOfWeek function end */

  /* getRelativeDate function start */
  DateLibrary.getRelativeDate = function(inputDate, input) {
    // get operationType and convert into lower case
    var operationType = getOperationTypeValue(input.operationType);
    /* operationType switch start */
    switch (operationType) {
      /* Absolute_DateTime Case start */
      case DateLibrary.OperationType.Absolute_DateTime:
        // check validation of value
        if (validateValueIsInteger(input.value)) {
          // check validation of granularityType
          if (validateGranularityType(input.granularityType)) {
            // call addDateTime function and return value
            return addDateTime(inputDate, input);
          }
        }
        break;
        /* Absolute_DateTime Case end */

        /* First_Date Case start */
      case DateLibrary.OperationType.First_Date:
        // check validation of granularityType
        if (validateGranularityType(input.granularityType)) {
          //call getFirstDay function and return value
          return getFirstDay(inputDate, input.granularityType.toTitleCase());
        }
        break;
        /* First_Date Case end */

        /* Last_Date Case start */
      case DateLibrary.OperationType.Last_Date:
        // check validation of granularityType
        if (validateGranularityType(input.granularityType)) {
          // call getLastDay function and return value
          return getLastDay(inputDate, input.granularityType.toTitleCase());
        }
        break;
        /* Last_Date Case end */

        /* Date_of_Weekday_in_Week Case start */
      case DateLibrary.OperationType.Date_of_Weekday_in_Week:
        // check validation
        if (validateWeekName(input.startDayOfWeek) &&
          (validateWeekName(input.returnDayOfWeek) || validateDayNumberOfWeek(input.returnDayNumberOfWeek))) {
          // call getDateOfWeekDdayInWeek function and return value
          return getDateOfWeekdayInWeek(inputDate, input);
        } else {
          console.error("some paramerter is not valid please correct it");
        }
        break;
        /* Date_of_Weekday_in_Week Case end */

        /* Date_of_Weekday_in_Month_for_Given_Week Case start*/
      case DateLibrary.OperationType.Date_of_Weekday_in_Month_for_Given_Week:
        // check validation
        if (validateWeekName(input.startDayOfWeek) && validateWeekOfMonth(input.WeekOfMonth) &&
          (validateWeekName(input.returnDayOfWeek) || validateDayNumberOfWeek(input.returnDayNumberOfWeek))) {
          // call getDateOfWeekDayInMonthFOrGivenWeek function and return value
          return getDateOfWeekdayInMonthForGivenWeek(inputDate, input);
        } else {
          console.error("some paramerter is not valid please correct it");
        }
        break;
        /* Date_of_Weekday_in_Month_for_Given_Week Case end*/

        /* Date_of_Weekday_in_Quarter_for_Given_Month_and_Week Case start */
      case DateLibrary.OperationType.Date_of_Weekday_in_Quarter_for_Given_Month_and_Week:
        // check validation
        if (validateWeekName(input.startDayOfWeek) && validateMonthOfQuarter(input.MonthOfQuarter) && validateWeekOfMonth(input.WeekOfMonth) &&
          (validateWeekName(input.returnDayOfWeek) || validateDayNumberOfWeek(input.returnDayNumberOfWeek))) {
          return getDateOfWeekdayInQuarterForGivenMonthAndWeek(inputDate, input);
        } else {
          console.error("some paramerter is not valid please correct it");
        }
        break;
        /* Date_of_Weekday_in_Quarter_for_Given_Month_and_Week Case end */

        // Date_of_Weekday_in_Year_for_Given_Week Case start
      case DateLibrary.OperationType.Date_of_Weekday_in_Year_for_Given_Week:
        // check validation
        if (validateWeekName(input.startDayOfWeek) && validateWeekOfYear(input.WeekOfYear) &&
          (validateWeekName(input.returnDayOfWeek) || validateDayNumberOfWeek(input.returnDayNumberOfWeek))) {
          // call getDateOfWeekDdayInWeek function and return value
          return getDateOfWeekdayInYearForGivenWeek(inputDate, input);
        } else {
          console.error("some paramerter is not valid please correct it");
        }
        break;
        // Date_of_Weekday_in_Year_for_Given_Week Case end

        // Date_of_Weekday_in_Year_for_Given_Month_and_Week Case start
      case DateLibrary.OperationType.Date_of_Weekday_in_Year_for_Given_Month_and_Week:
        // check validation
        if (validateWeekName(input.startDayOfWeek) && validateWeekOfMonth(input.WeekOfMonth) && validateMonthOfYear(input.MonthOfYear) &&
          (validateWeekName(input.returnDayOfWeek) || validateDayNumberOfWeek(input.returnDayNumberOfWeek))) {
          // call getDateOfWeekDayInMonthFOrGivenWeek function and return value
          return getDateOfWeekdayInyearForGivenMonthAndWeek(inputDate, input);
        } else {
          console.error("some paramerter is not valid please correct it");
        }
        break;
        // Date_of_Weekday_in_Year_for_Given_Month_and_Week Case end

        // Date_of_Weekday_in_Year_for_Given_Quarter_and_Month_and_Week Case start
      case DateLibrary.OperationType.Date_of_Weekday_in_Year_for_Given_Quarter_and_Month_and_Week:
        // check validation
        if (validateWeekName(input.startDayOfWeek) && validateMonthOfQuarter(input.MonthOfQuarter) &&
          validateQuarterOfYear(input.QuarterOfYear) && validateWeekOfMonth(input.WeekOfMonth) &&
          (validateWeekName(input.returnDayOfWeek) || validateDayNumberOfWeek(input.returnDayNumberOfWeek))) {
          // call getDateOfWeekdayInYearForGivenQuarterAndMonthAndWeek function and return value
          return getDateOfWeekdayInYearForGivenQuarterAndMonthAndWeek(inputDate, input);
        } else {
          console.error("some paramerter is not valid please correct it");
        }
        break;
        // Date_of_Weekday_in_Year_for_Given_Quarter_and_Month_and_Week Case end

        /* default case start */
      default:
        console.error("operationType not match");
        break;
        /* default case end */
    } /* operationType switch end */
    return -1;
  }; /* getRelativeDate function end */

  /* getWeekNumber function start*/
  DateLibrary.getWeekNumber = function(inputDate, input) {
    // get operationType and convert into lower case
    var operationType = getOperationTypeValue(input.operationType);
    /* operationType switch start */
    switch (operationType) {
      // Week_of_Year Case start
      case DateLibrary.OperationType.Week_of_Year:
        // check validation
        if (validateWeekName(input.startDayOfWeek)) {
          // call getWeekOfYear function and return value
          return getWeekOfYear(inputDate, input);
        } else {
          console.error("some paramerter is not valid please correct it");
        }
        break;
        // Week_of_Year Case end

        // Calendar_Week_of_Month Case start
      case DateLibrary.OperationType.Calendar_Week_of_Month:
        // check validation
        if (validateWeekName(input.startDayOfWeek)) {
          // call getCalendarWeekOfMonth function and return value
          return getCalendarWeekOfMonth(inputDate, input);
        } else {
          console.error("some paramerter is not valid please correct it");
        }
        break;
        // Calendar_Week_of_Month Case end

        // Week_of_Month_by_Days_Distribution_for_as_Weeks Case start
      case DateLibrary.OperationType.Week_of_Month_by_Days_Distribution_for_as_Weeks:
        var _28days = [];
        var _29days = [];
        var _30days = [];
        var _31days = [];

        // check validation
        if (validateValueIsArray(input["28days"]) && validateValueIsArray(input["29days"]) &&
          validateValueIsArray(input["30days"]) && validateValueIsArray(input["31days"])) {
          _28days = input["28days"];
          _29days = input["29days"];
          _30days = input["30days"];
          _31days = input["31days"];
          // check validation
          if (validateArraySum(_28days, 28) && validateArraySum(_29days, 29) && validateArraySum(_30days, 30) && validateArraySum(_31days, 31)) {
            // call getWeekOfMonthByDaysDistributionForAsWeeks function and return value
            return getWeekOfMonthByDaysDistributionForAsWeeks(inputDate, input);
          }
        }
        break;
        // Week_of_Month_by_Days_Distribution_for_as_Weeks Case end

        /* default case start */
      default:
        console.error("operationType not match");
        break;
        /* default case end */
    } /* operationType switch end */
    return -1;
  }; /* getWeekNumber function end*/

  //CBT: This funtion is used to get difference between two Dates in seconds,minutes,hours,days,weeks
  DateLibrary.getDateDifference = function(fromDate, toDate, input) {
    var daysDiff = 0;
    if (validateGranularityType(input.granularityType)) {
      var difference = (new Date(toDate)).getTime() - (new Date(fromDate)).getTime();
      var dividedBy = 1;
      var granularityType = input.granularityType.toTitleCase();
      // granularityType switch start
      switch (granularityType) {
        // this case for seconds
        case DateLibrary.GranularityType.Seconds:
          dividedBy = 1000;
          break;

          // this case for minutes
        case DateLibrary.GranularityType.Minutes:
          dividedBy = 60 * 1000;
          break;

          // this case for hours
        case DateLibrary.GranularityType.Hours:
          dividedBy = 60 * 60 * 1000;
          break;

          // this case for days
        case DateLibrary.GranularityType.Days:
          dividedBy = 24 * 60 * 60 * 1000;
          break;

          // this case for Weeks
        case DateLibrary.GranularityType.Weeks:
          dividedBy = 7 * 24 * 60 * 60 * 1000;
          break;

        default:
          throw Error("GranularityType is not valid : " + granularityType);
      } // granularityType switch end

      var dateDifference = difference / dividedBy;
      return dateDifference;
    }
  }

  //CBT: This funtion is used to get Days difference between two Dates in days,
  //Here you can excludeDays ["monday","sunday"] and
  //exclude dates [new Date("2016-04-25"),new Date("2016-04-26")]
  DateLibrary.getDifferenceInDays = function(fromDate, toDate, excludeDates, excludeDays) {
    var daysDiff = 0;
    var tempFromDate = (DateLibrary.getRelativeDate(new Date(fromDate), {
      operationType: "First_Date",
      granularityType: "days"
    })).getTime();
    var tempToDate = (DateLibrary.getRelativeDate(new Date(toDate), {
      operationType: "First_Date",
      granularityType: "days"
    })).getTime();

    //CBT: check exclude dates and exclude days both are undefined
    if ((excludeDates == undefined || excludeDates.length == 0) && (excludeDays == undefined || excludeDays.length == 0)) {
      daysDiff = DateLibrary.getDateDifference(tempFromDate, tempToDate, {
        granularityType: "days"
      }); //(tempToDate - tempFromDate) / (24 * 60 * 60 * 1000);
    } else {
      if (validateValueIsArray(excludeDates) && validateValueIsArray(excludeDays)) {
        var tempExcludeDates = [];
        if (excludeDates.length != 0) {
          excludeDates.forEach(function(excludeDate) {
            var tempDate = DateLibrary.getRelativeDate(new Date(excludeDate), {
              operationType: "First_Date",
              granularityType: "days"
            });
            tempExcludeDates.push(tempDate.getTime());
          });
        }
        //debug("tempExcludeDates=====" + tempExcludeDates + "\n excludeDays=======" + excludeDays);
        daysDiff = findDateDifference(tempFromDate, tempToDate, tempExcludeDates, excludeDays);
      } else {
        throw Error("excludeDates and excludeDays should be array");
      }
    }
    return daysDiff;
  }

  //CBT:this function is used to convert julian time to time string
  DateLibrary.getNumberToTimeStr = function(timeString, JSONObj) {
    var newTimeString = addPaddingChar(parseInt(timeString), 6, '0');
    hrs = newTimeString.substr(0, 2);
    min = newTimeString.substr(2, 2);
    sec = newTimeString.substr(4, 2);
    //throw on invalid error
    if ((parseInt(hrs) < 0 || parseInt(hrs) > 23) || (parseInt(min) < 0 || parseInt(min) > 59) || (parseInt(sec) < 0 || parseInt(sec) > 59)) {
      throw Error("Invalid time : " + newTimeString);
    }
    var time = hrs + JSONObj.delimiter + min + JSONObj.delimiter + sec;
    return time;
  }


  //This function used to convert julian date to date object accept two parameter
  //julian String : accept 6 digit julian date in string format
  //timeString : optional : accept time in string format eg: 123558
  DateLibrary.julianToDate = function(julianString, timeString) {
      if (julianString.length != 6) { //throw error if length is not 6
        throw Error("Invalid julian date : julian date parameter should be string and length should be 6");
      }
      //get year from julian string as per  formula
      var year = (parseInt(julianString.substr(0, 1)) + 19).toString() + julianString.substr(1, 2);
      //get day of year from julian string as per  formula
      var day = parseInt(julianString.substr(3, 3));
      var hrs, min, sec;
      var tempDate = "1-1-" + year;
      //check if time peremeter is passed
      if (timeString != undefined && timeString != null && timeString != "") {
        var time = DateLibrary.getNumberToTimeStr(timeString, {
          delimiter: ":"
        });
        tempDate = tempDate + " " + time;
      }
      tempDate = new Date(tempDate);
      //use getRelativeDate function which add number of days we have found to tempDate;
      var result = DateLibrary.getRelativeDate(tempDate, {
        operationType: "Absolute_DateTime",
        granularityType: "Days",
        value: day - 1
      });
      return result;
    }
    //CBT:this function is used to prepand padding character
  function addPaddingChar(inputNumber, width, paddingChar) {
    inputNumber = inputNumber + '';
    return inputNumber.length >= width ? inputNumber : new Array(width - inputNumber.length + 1).join(paddingChar) + inputNumber;
  }

  function findDateDifference(fromDate, toDate, excludeDates, excludeDays) {
    var daysDiff = 0;
    var currenDate = fromDate;
    excludeDays = excludeDays.map(function(d) {
      return d.toLowerCase();
    });
    while (currenDate < toDate) {
      var tempDays = DateLibrary.getDayOfWeek(new Date(currenDate), {
        operationType: "Day_of_Week"
      }).toLowerCase();
      if (excludeDates.indexOf(currenDate) == -1 && excludeDays.indexOf(tempDays) == -1) {
        daysDiff = daysDiff + 1;
      }
      currenDate = DateLibrary.getRelativeDate(new Date(currenDate), {
        operationType: "Absolute_DateTime",
        granularityType: "days",
        value: 1
      }).getTime();
    }
    return daysDiff;
  }
  // OperationType JSON
  DateLibrary.OperationType = {
    Day_of_Week: "day of week",
    Day_Number_of_Week: "day number of week",
    Absolute_DateTime: "absolute datetime",
    First_Date: "first date",
    Last_Date: "last date",
    Date_of_Weekday_in_Week: "date of weekday in week",
    Date_of_Weekday_in_Month_for_Given_Week: "date of weekday in month for given week",
    Date_of_Weekday_in_Quarter_for_Given_Month_and_Week: "date of weekday in quarter for given month and week",
    Date_of_Weekday_in_Year_for_Given_Week: "date of weekday in year for given week",
    Date_of_Weekday_in_Year_for_Given_Month_and_Week: "date of weekday in year for given month and week",
    Date_of_Weekday_in_Year_for_Given_Quarter_and_Month_and_Week: "date of weekday in year for given quarter and month and week",
    Week_of_Year: "week of year",
    Calendar_Week_of_Month: "calendar week of month",
    Week_of_Month_by_Days_Distribution_for_as_Weeks: "week of month by days distribution for as weeks",
  };

  // DateOfWeek JSON
  DateLibrary.DOW = {
    Sunday: "Sunday",
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday"
  };

  // GranularityType JSON
  DateLibrary.GranularityType = {
    Seconds: 'Seconds',
    Minutes: 'Minutes',
    Hours: 'Hours',
    Days: 'Days',
    Weeks: 'Weeks',
    Months: 'Months',
    Quarters: 'Quarters',
    HalfYears: 'Halfyear',
    Years: 'Years'
  }

  // WEEK_DAY_NAME Array
  DateLibrary.WEEK_DAY_NAME = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  /* Common Function Start */

  // convert String into TitleCase
  String.prototype.toTitleCase = function() {
    return this.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  function getOperationTypeValue(operationType) {
    if (operationType != undefined) {
      if (DateLibrary.OperationType.hasOwnProperty(operationType)) {
        return DateLibrary.OperationType[operationType];
      } else {
        return operationType.toLowerCase();
      }
    } else {
      return "";
    }
  }

  // generate newWeekDayName Array Function and return DOW Array
  function newWeekDayNameCalculation(startDayIndex) {
    var newWeekDayName = [],
      count = 0;
    while (newWeekDayName.length < 7) {
      newWeekDayName[count++] = DateLibrary.WEEK_DAY_NAME[startDayIndex++];
      if (startDayIndex == 7)
        startDayIndex = 0;
    }
    return newWeekDayName;
  }

  // get WeekNumber of Given Date Month and return week number
  function getWeekInMonth(inputDate, startDayOfWeek) {
    var date = new Date(inputDate);
    var dateNumber = date.getDate();
    var startDayIndex = DateLibrary.WEEK_DAY_NAME.indexOf(startDayOfWeek)
    var newWeekDayName = newWeekDayNameCalculation(startDayIndex);
    date.setDate(1);
    var inputDateDayName = DateLibrary.WEEK_DAY_NAME[date.getDay()];
    var inputDateDayIndex = newWeekDayName.indexOf(inputDateDayName);
    var weekEndDate = (7 - inputDateDayIndex);
    var weekNumber = 1
    while (weekEndDate < dateNumber) {
      weekEndDate += 7;
      weekNumber++;
    }
    return weekNumber;
  }

  // set Time to at Start into given Date and return Date
  function setDateOfTimeAtStart(date) {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  }

  // set Time to at End into given Date and return Date
  function setDateOfTimeAtEnd(date) {
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    date.setMilliseconds(999);
    return date;
  }
  /* Common Function End */

  /* Validation Function Start */
  // check value is Array is not
  function validateValueIsArray(arrayName) {
    assertHelper.assertType(arrayName, 'array', 'need to be array')
    return true;
  }

  // check Array sum is equal to total sum
  function validateArraySum(arrayName, total) {
    var cnt = 0;
    for (var int = 0; int < arrayName.length; int++) {
      if (arrayName[int] >= 0 && Math.abs(arrayName[int] - parseInt(arrayName[int])) < 0.00001)
        cnt += arrayName[int];
      else
        throw Error("array not contain some value postive integer");
    }
    if (total != cnt)
      throw Error("array sum is not match : " + arrayName);
    return true;
  }

  // check weekName is valid in DOW JSON or not
  function validateWeekName(weekName) {
    if (weekName != undefined && DateLibrary.DOW.hasOwnProperty(weekName.toTitleCase()))
      return true;
    else
      return false;
  }

  function validateValueIsInteger(value) {
    assertHelper.checkInteger(value, "value is should be integer");
    return true;
  }

  // check dayNumber is valid or not
  function validateDayNumberOfWeek(dayNumber) {
    if (dayNumber != undefined && validateValueIsInteger(dayNumber) && dayNumber >= 0 && dayNumber <= 6)
      return true;
    else
      return false;
  }

  // check weekOfYear is valid or not
  function validateWeekOfYear(weekOfYear) {
    if (weekOfYear != undefined && validateValueIsInteger(weekOfYear) && weekOfYear >= 1 && weekOfYear <= 52)
      return true;
    else
      return false;
  }

  // check weekOfMonth is valid or not
  function validateWeekOfMonth(weekOfMonth) {
    if (weekOfMonth != undefined && validateValueIsInteger(weekOfMonth) && weekOfMonth >= 1 && weekOfMonth <= 6)
      return true;
    else
      return false;
  }

  // check monthOfQuarter is valid or not
  function validateMonthOfQuarter(monthOfQuarter) {
    if (monthOfQuarter != undefined && validateValueIsInteger(monthOfQuarter) && monthOfQuarter >= 1 && monthOfQuarter <= 3)
      return true;
    else
      return false;
  }

  // check monthOfQuarter is valid or not
  function validateQuarterOfYear(quarterOfYear) {
    if (quarterOfYear != undefined && validateValueIsInteger(quarterOfYear) && quarterOfYear >= 1 && quarterOfYear <= 4)
      return true;
    else
      return false;
  }

  // check monthOfQuarter is valid or not
  function validateMonthOfYear(monthOfYear) {
    if (monthOfYear != undefined && validateValueIsInteger(monthOfYear) && monthOfYear >= 1 && monthOfYear <= 12)
      return true;
    else
      return false;
  }

  // check granularityType is valid in granularityType JSON or not
  function validateGranularityType(granularityType) {
    if (granularityType != undefined && DateLibrary.GranularityType.hasOwnProperty(granularityType.toTitleCase()))
      return true;
    else
      throw Error("GranularityType is not valid : " + granularityType);

  }
  /* Validation Function End */

  /* Date Function Start */

  // getDayOfWeek function start
  function getDayOfWeek(inputDate) {
    return DateLibrary.WEEK_DAY_NAME[inputDate.getDay()];
  } // getDayOfWeek function end

  // getDayNumberOfWeek function start
  function getDayNumberOfWeek(inputDate, startDayOfWeek) {
    var todayDay = inputDate.getDay();
    var startDay = DateLibrary.WEEK_DAY_NAME.indexOf(startDayOfWeek);
    return (7 + (todayDay - startDay)) % 7;
  } // getDayNumberOfWeek function end

  // addDateTime function start
  function addDateTime(inputDate, input) {
    var date = new Date(inputDate);
    var value = (input.value);
    var granularityType = input.granularityType.toTitleCase();

    // granularityType switch start
    switch (granularityType) {
      // this case for seconds
      case DateLibrary.GranularityType.Seconds:
        date.setSeconds(date.getSeconds() + value);
        break;

        // this case for minutes
      case DateLibrary.GranularityType.Minutes:
        date.setMinutes(date.getMinutes() + value);
        break;

        // this case for hours
      case DateLibrary.GranularityType.Hours:
        date.setHours(date.getHours() + value);
        break;

        // this case for days
      case DateLibrary.GranularityType.Days:
        date.setDate(date.getDate() + value);
        break;

        // this case for months
      case DateLibrary.GranularityType.Months:
        date.setDate(1);
        date.setMonth(date.getMonth() + value);
        break;

        // this case for years
      case DateLibrary.GranularityType.Years:
        date.setDate(1);
        date.setFullYear(date.getFullYear() + value);
        break;

      default:
        console.error("Invalid granularityType");
    } // granularityType switch end
    return date;
  } // addDateTime function end

  // getFirstDay function start
  function getFirstDay(inputDate, granularityType) {
    var date = new Date(inputDate);
    // call setDateOfTimeAtStart function
    date = setDateOfTimeAtStart(date);
    //date.setDate(1);

    // granularityType switch start
    switch (granularityType) {
      // this case  for days
      case DateLibrary.GranularityType.Days:
        // Not Need to Write Any thing
        break;
        // this case  for months
      case DateLibrary.GranularityType.Months:
        date.setDate(1);
        // Not Need to Write Any thing
        break;

        // this case  for quarters
      case DateLibrary.GranularityType.Quarters:
        // calculate quarters
        date.setDate(1);
        var qtr = parseInt((date.getMonth()) / 3);
        // set quarters first month
        date.setMonth(qtr * 3);
        break;

        // this case  for halfYears
      case DateLibrary.GranularityType.HalfYears:
        // calculate half years
        date.setDate(1);
        var hy = parseInt((date.getMonth() + 1) / 6);
        // set half years first month
        date.setMonth(hy * 6);
        break;

        // this case  for years
      case DateLibrary.GranularityType.Years:
        date.setDate(1);
        date.setMonth(0);
        break;

      default:
        console.error("Invalid granularityType");
    } // granularityType switch end
    return date;
  } // getFirstDay function end

  // getLastDay function start
  function getLastDay(inputDate, granularityType) {
    var date = new Date(inputDate);

    var lastDayArray = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
    var year = date.getFullYear();
    if (year % 4 === 0) {
      lastDayArray[1] = "29";
    }

    // call setDateOfTimeAtEnd function
    date = setDateOfTimeAtEnd(date);

    // granularityType switch start
    switch (granularityType) {
      // this case  for days
      case DateLibrary.GranularityType.Days:
        // Not Need to Write Any thing
        break;

        // this case for month
      case DateLibrary.GranularityType.Months:
        // date.setMonth(date.getMonth() + 1);
        date.setDate(1);
        var month = date.getMonth();
        date.setDate(lastDayArray[month]);
        break;

        // this case for quarter
      case DateLibrary.GranularityType.Quarters:
        // calculate quarters
        var qrt = parseInt(date.getMonth() / 3);
        var month = (qrt * 3) + (2);
        // set quarters last month
        date.setDate(1);
        date.setMonth(month);
        date.setDate(lastDayArray[month]);
        break;

        // this case for halfYears
      case DateLibrary.GranularityType.HalfYears:
        // calculate half years
        var hf = parseInt((date.getMonth() + 1) / 6);
        // set half years last month
        date.setMonth(hf * 6 + 6 - 1);
        date.setDate(lastDayArray[hf - 1]);
        break;

        // this case for years
      case DateLibrary.GranularityType.Years:
        date.setDate(1);
        date.setMonth(11);
        date.setDate(31);
        break;

      default:
        console.error("Invalid granularityType");
    } // granularityType switch end
    return date;
  } // getLastDay function end

  // getDateOfWeekdayInWeek function start
  function getDateOfWeekdayInWeek(inputDate, input) {
    var date = new Date(inputDate);

    var startDayIndex = DateLibrary.WEEK_DAY_NAME.indexOf(input.startDayOfWeek.toTitleCase());

    // call newWeekDayNameCalculation function
    var newWeekDayName = newWeekDayNameCalculation(startDayIndex);

    var todayDayIndex = newWeekDayName.indexOf(DateLibrary.WEEK_DAY_NAME[date.getDay()]);

    if (input.returnDayOfWeek != undefined) {
      var returnDayIndex = newWeekDayName.indexOf(input.returnDayOfWeek.toTitleCase())
      date.setDate(date.getDate() - todayDayIndex + returnDayIndex);
    }

    if (input.returnDayNumberOfWeek != undefined) {
      var returnDayNumberOfWeek = input.returnDayNumberOfWeek;
      date.setDate(date.getDate() - todayDayIndex + parseInt(returnDayNumberOfWeek));
    }

    // call setDateOfTimeAtStart function
    date = setDateOfTimeAtStart(date);

    return date;
  } // getDateOfWeekdayInWeek function end

  // getDateOfWeekdayInMonthForGivenWeek function start
  function getDateOfWeekdayInMonthForGivenWeek(inputDate, input) {

    // call getDateOfWeekdayInWeek function
    var date = getDateOfWeekdayInWeek(inputDate, input);

    // call getWeekInMonth function
    var inputDateWeekNumber = getWeekInMonth(inputDate, input.startDayOfWeek);

    var weekOfMonth = parseInt(input.WeekOfMonth);

    var dateNumber = date.getDate();
    date.setDate(dateNumber - ((inputDateWeekNumber - weekOfMonth) * 7));
    return date;
  } // getDateOfWeekdayInMonthForGivenWeek function end

  // getDateOfWeekdayInQuarterForGivenMonthAndWeek function start
  function getDateOfWeekdayInQuarterForGivenMonthAndWeek(inputDate, input) {
    var date = new Date(inputDate);
    var monthOfQuarter = parseInt(input.MonthOfQuarter);
    var weekOfMonth = parseInt(input.WeekOfMonth);
    var inputDateQuarter = parseInt((date.getMonth() + 1) / 4);
    var month = (inputDateQuarter * 3) + monthOfQuarter - 1;

    date.setMonth(month);
    date.setDate(1);
    inputDate = new Date(date);
    // call getDateOfWeekdayInMonthForGivenWeek function
    return getDateOfWeekdayInMonthForGivenWeek(inputDate, input);
  } // getDateOfWeekdayInQuarterForGivenMonthAndWeek function end

  // getDateOfWeekdayInYearForGivenWeek function start
  function getDateOfWeekdayInYearForGivenWeek(inputDate, input) {
    //assert(DateLibrary.getDateFromDate(iDate, {operationType: "date of weekday in year for given week",
    //startDayOfWeek:"Tuesday", returnDayOfWeek:"Sunday", WeekOfYear:"18"}), (new Date(2015,04,03,0,0,0)));
    var countWeek = 0;
    var monthCount = 0;
    var WeekOfYear = parseInt(input.WeekOfYear);
    var date = new Date(inputDate);
    var previousCoundWeek = 0;
    var startDayOfWeek = input.startDayOfWeek;
    while (countWeek <= WeekOfYear) {
      previousCoundWeek = countWeek;
      date.setDate(1);
      date.setMonth(monthCount);
      monthCount++;
      date = getLastDay(date, "Months");
      countWeek += getWeekInMonth(date, startDayOfWeek);
      if (monthCount != 1)
        countWeek--;
    }
    var dateCount = 0;
    if (monthCount != 2)
      dateCount = (previousCoundWeek - 1) * 7 + (WeekOfYear - previousCoundWeek) * 7 - 1;
    else
      dateCount = (previousCoundWeek) * 7 + (WeekOfYear - previousCoundWeek) * 7 - 1;

    date.setDate(1);
    date.setMonth(0);
    date.setDate(dateCount);

    return getDateOfWeekdayInWeek(date, input);;

  } // getDateOfWeekdayInYearForGivenWeek function end

  // getDateOfWeekdayInyearForGivenMonthAndWeek function start
  function getDateOfWeekdayInyearForGivenMonthAndWeek(inputDate, input) {
    var date = new Date(inputDate);
    var MonthOfYear = parseInt(input.MonthOfYear);
    date.setDate(1);
    date.setMonth(MonthOfYear - 1);
    return getDateOfWeekdayInMonthForGivenWeek(date, input);
  } // getDateOfWeekdayInyearForGivenMonthAndWeek function end

  // getDateOfWeekdayInYearForGivenQuarterAndMonthAndWeek function start
  function getDateOfWeekdayInYearForGivenQuarterAndMonthAndWeek(inputDate, input) {
    var date = new Date(inputDate);
    var MonthOfQuarter = parseInt(input.MonthOfQuarter);
    var QuarterOfYear = parseInt(input.QuarterOfYear);
    date.setDate(1);
    date.setMonth(QuarterOfYear * 3 - MonthOfQuarter);
    return getDateOfWeekdayInMonthForGivenWeek(date, input);
  } // getDateOfWeekdayInYearForGivenQuarterAndMonthAndWeek function end

  // getWeekOfYear function start
  function getWeekOfYear(inputDate, input) {
    var countWeekofPreviousMonth = 0;
    var monthCount = 0;
    var date = new Date(inputDate);
    var inputDateMonth = date.getMonth();
    var previousCoundWeek = 0;
    var startDayOfWeek = input.startDayOfWeek;
    while (monthCount < inputDateMonth) {
      date.setDate(1);
      date.setMonth(monthCount);
      monthCount++;
      date = getLastDay(date, "Months");
      countWeekofPreviousMonth += getWeekInMonth(date, startDayOfWeek);
      if (monthCount != 1)
        countWeekofPreviousMonth--;
    }
    var countWeekofMonth = getWeekInMonth(inputDate, startDayOfWeek);
    return countWeekofPreviousMonth + (countWeekofPreviousMonth === 0 ? countWeekofMonth : countWeekofMonth - 1);
  } // getWeekOfYear function end

  // getWeekOfMonthByDaysDistributionForAsWeeks function start
  function getWeekOfMonthByDaysDistributionForAsWeeks(inputDate, input) {
    var date = new Date(inputDate);
    var days = [];
    days[0] = input["28days"];
    days[1] = input["29days"];
    days[2] = input["30days"];
    days[3] = input["31days"];

    var LastDayOfDate = (getLastDay(date, "Months")).getDate();
    var inputDateDate = inputDate.getDate();
    var countWeek = 0;
    var sumOfDays = 0;
    for (var int = 0; int < days[LastDayOfDate - 28].length; int++) {
      if (sumOfDays < inputDateDate) {
        sumOfDays += days[LastDayOfDate - 28][int];
        countWeek++;
      }
    }
    return countWeek;
  } // getWeekOfMonthByDaysDistributionForAsWeeks function end

  // getCalendarWeekOfMonth function start
  function getCalendarWeekOfMonth(inputDate, input) {
    var startDayOfWeek = input.startDayOfWeek;
    return getWeekInMonth(inputDate, startDayOfWeek);
  } // getCalendarWeekOfMonth function end

  /* Date Function End */
  if (typeof define === "function" && define.amd) this.DateLibrary = DateLibrary, define(DateLibrary);
  else if (typeof module === "object" && module.exports) module.exports = DateLibrary;
  else this.DateLibrary = DateLibrary;
}();
