# Date Library
---
#### Author : Ashish Vaghasiya
##### Created on : 9th Nov 2015
---
## constant


- OperationType
	* Day\_of\_Week
	* Day\_Number\_of\_Week
	* Absolute\_DateTime
	* First\_Date
	* Last\_Date
	* Date\_of\_Weekday\_in\_Week
	* Date\_of\_Weekday\_in\_Month\_for\_Given\_Week
	* Date\_of\_Weekday\_in\_Quarter\_for\_Given\_Month\_and_Week
	* Date\_of\_Weekday\_in\_Year\_for\_Given\_Week
	* Date\_of\_Weekday\_in\_Year\_for\_Given\_Month\_and\_Week
	* Date\_of\_Weekday\_in\_Year\_for\_Given\_Quarter\_and\_Month\_and\_Week
	* Week\_of\_Year
	* Calendar\_Week\_of\_Month
	* Week\_of\_Month\_by\_Days\_Distribution\_for\_as\_Weeks

	---

- DOW (Date Of Week)
	* Sunday
	* Monday
	* Tuesday
	* Wednesday
	* Thursday
	* Friday
	* Saturday

	---

- GranularityType
	* Seconds
	* Minutes
	* Hours
	* Days
	* Weeks
	* Months
	* Quarters
	* HalfYears
	* Years


## functions
- DateLibrary.getDayOfWeek(Date, {JSON Object})

	* _example1_
		- _Description_ : find Week Name from `15th June 2015`.
		```javascript
			DateLibrary.getDayOfWeek(new Date("2015-06-15"),
				{operationType:"Day_of_Week"}) // Output : Monday
		```
		- _Steps_
			- find day of week from given date[`Monday`]			

	* _example2_
		- _Description_ :  if first day of week is `Sunday`, what day will be on `15th June 2015`.
		```javascript
			DateLibrary.getDayOfWeek(new Date("2015-06-15"),
				{operationType:"Day_Number_of_Week",
					startDayOfWeek:"Sunday"}) // Output : 1
		```
		- _Steps_
			- find Week of given date (Sunday as Start day of week) [`14th May 2015` to `20th May 2015`]
			- Given Date follow in 2nd day [`1`]
---
- DateLibrary.getRelativeDate(Date, {JSON Object})

	* _example1_
		- _Description_ :  Subtract 13 `Days` From Given Date
		```javascript
			DateLibrary.getRelativeDate(new Date("2015-06-15 14:10:39"),
				{operationType: "Absolute_DateTime",
					granularityType: "Days",value: -13}) // Output : Tue Jun 02 2015 14:10:39
		```
		- _Steps_
			- find Day from given date [`15`]
			- Subtract 13 Days from given date [`15-13`]			

	* _example2_
		- _Description_ :  Subtract 13 `Hours` From Given Date
		```javascript
			DateLibrary.getRelativeDate(new Date("2015-06-15 14:10:39"),
				{operationType: "Absolute_DateTime",
					granularityType: "Hours",value: -13}) // Output : Tue Jun 15 2015 01:10:39
		```
		- _Steps_
			- find Hours from given date [`14`]
			- Subtract 13 Hours from given date [`14-13`]			

	* _example3_
		- _Description_ :  get First Day of `quarter` From Given Date
		```javascript
			DateLibrary.getRelativeDate(new Date("2015-06-15"),
				{operationType:"First_Date",granularityType:"Quarters"}) // Output : Wed Apr 01 2015 00:00:00
		```
		- _Steps_
			- find quarter for given date [`2nd Quarter`]
			- find first month of quarter [`Apr`]						

	* _example4_
		- _Description_ :  get Last Day of `quarter` From Given Date
		```javascript
			DateLibrary.getRelativeDate(new Date("2015-06-15"),
				{operationType:"Last_Date",granularityType:"Quarters"}) // Output : Wed Jun 30 2015 23:59:59
		```
		- _Steps_
			- find quarter for given date [`2nd Quarter`]
			- find last month of quarter [`Jun`]

	* _example5_
		- _Description_ :  if first day of week is `Sunday`, what date will be on `Wednesday`, if given date is `15th June 2015`.
		```javascript
			DateLibrary.getRelativeDate(iDate,
				{operationType: "Date_of_Weekday_in_Week",
					startDayOfWeek:"Sunday",returnDayOfWeek:"Wednesday"}) // Output : Wed Jun 17 2015 00:00:00
		```
		- _Steps_
			- find Week of given date (Sunday as Start day of week) [`14th May 2015` to `21st May 2015`]
			- Wednesday will be on [`17th May 2015`]

	* _example6_
		- _Description_ :  if first day of week is `Wednesday`, what date will be on `1st day of week`, if given date is `15th June 2015`.
		```javascript
			DateLibrary.getRelativeDate(new Date("2015-06-15"),
				{operationType:"Date_of_Weekday_in_Week",
					startDayOfWeek:"Wednesday",returnDayNumberOfWeek:0}) // Output : Wed Jun 10 2015 00:00:00			
		```
		- _Steps_
			- find Week of given date (Wednesday as Start day of week) [`10th May 2015` to `17th May 2015`]
			- 1st day of week should be [`10th May 2015`]

	* _example7_
		- _Description_ :  if first day of week is `Monday`, what date will be on `Friday` of `2nd Week` of `Month` containing `15th June 2015` as one of the date.
		```javascript
			DateLibrary.getRelativeDate(new Date("2015-06-15"),
				{operationType:"Date_of_Weekday_in_Month_for_Given_Week",
					startDayOfWeek: "Monday",returnDayOfWeek:"Friday",WeekOfMonth:2}) // Output : Fri Jun 12 2015 00:00:00
		```
		- _Steps_
			- find month for given date [`Jun`]
			- find 2nd Week of month (Monday as Start day of week) [`8th May 2015` to `14th May 2015`]
			- Friday will be on [`12th May 2015`]

	* _example8_
		- _Description_ :  if first day of week is `Sunday`, what date will be `fourth day` of `3rd Week` of `Month` containing `15th June 2015` as one of the date.
		```javascript
			DateLibrary.getRelativeDate(new Date("2015-06-15"),
				{operationType: "Date_of_Weekday_in_Month_for_Given_Week",
					startDayOfWeek:"Sunday",returnDayNumberOfWeek:3,WeekOfMonth:3}) // Output : Wed Jun 17 2015 00:00:00
		```
		- _Steps_
			- find month for given date [`Jun`]
			- find 2nd Week of month (Sunday as Start day of week) [`14th May 2015` to `20th May 2015`]
			- The date of fourth day of week should be [`17th May 2015`]

	* _example9_
		- _Description_ :  if first day of week is `Tuesday`, what date will be on `Friday` of `3rd week` of `2nd month` of `quarter` containing `15th June 2015` as one of the date.
		```javascript
			DateLibrary.getRelativeDate(new Date("2015-06-15"),
				{operationType:"Date_of_Weekday_in_Quarter_for_Given_Month_and_Week",
					startDayOfWeek:"Tuesday",returnDayOfWeek:"Friday",MonthOfQuarter:2,WeekOfMonth:3}) // Output : 15th May 2015
		```
		- _Steps_
			- find quarter for given date [`2nd Quarter`]
			- find 2nd month of quarter [`May`]
			- find 3rd week of month (Tuesday as Start day of week) [`12th May 2015` to `18th May 2015`]
			- Friday will be on [`15th May 2015`]

	* _example10_
		- _Description_ :  if first day of week is `Tuesday`, what date will be on `Sunday` of `18th Week` of year containing `15th June 2015` as one of the date.
		```javascript
			DateLibrary.getRelativeDate(new Date("2015-06-15"),
				{operationType: "Date_of_Weekday_in_Year_for_Given_Week" ,
					startDayOfWeek: "Tuesday", returnDayOfWeek:"Sunday", WeekOfYear:18}) // Output : 3rd May 2015
		```
		- _Steps_			
			- find 18 week follow in which month [`May`]
			- find 18th week of year (Tuesday as Start day of week) [`28th Apr 2015` to `4th May 2015`]
			- Sunday will be on [`3rd May 2015`]

	* _example11_
		- _Description_ :  if first day of week is `Friday`, what date will be on `Tuesday` of `3rd Week` of `8th month` of year containing `15th June 2015` as one of the date.
		```javascript
			DateLibrary.getRelativeDate(new Date("2015-06-15"),
				{operationType:"Date_of_Weekday_in_Year_for_Given_Month_and_Week",
					startDayOfWeek:"Friday", returnDayOfWeek:"Tuesday", WeekOfMonth:3, MonthOfYear:8}) // Output : 18th Aug 2015
		```
		- _Steps_			
			- find 8th month in year [`Aug`]
			- find 3rd week of Month (Friday as Start day of week) [`14th Aug 2015` to `20th Aug 2015`]
			- Tuesday will be on [`18th Aug 2015`]

	* _example12_
		- _Description_ :  if first day of week is `Friday`, what date will be on `Tuesday` of `3rd Week` of `2nd month` of `3rd quarter` of year containing `15th June 2015` as one of the date.
		```javascript
			DateLibrary.getRelativeDate(new Date("2015-06-15"),
				{operationType: "Date_of_Weekday_in_Year_for_Given_Quarter_and_Month_and_Week",
					startDayOfWeek:"Friday",returnDayOfWeek:"Tuesday", QuarterOfYear:3, MonthOfQuarter:2, WeekOfMonth:3}) // Output : 18th Aug 2015
		```
		- _Steps_			
			- find 3rd quarter of year [`Jul` to `Sep`]
			- find 2nd month of quarter [`Aug`]
			- find 3rd week of month (Friday as Start day of week) [`14th Aug 2015` to `20th Aug 2015`]
			- Tuesday will be on [`18th Aug 2015`]

---

- DateLibrary.getWeekNumber(Date, {JSON Object})

	* _example1_
		- _Description_ :  if first day of week is `Tuesday`, what week number in year will be follow in `15th June 2015` as one of the date.
		```javascript
			DateLibrary.getWeekNumber(new Date("2015-06-15"),
				{operationType:"Week_of_Year",
					startDayOfWeek:"Tuesday"}) // Output : 24
		```
		- _Steps_
			- find Previous month(s) week count (Tuesday as Start day of week)(`Jan+Feb+Mar+Apr+May`) [`5+4+5+4+4`]
			- find week count of given date month(`Jun`) [`2`]
			- total week count is [`5+4+5+4+4+2` = `24`]

	* _example2_
		- _Description_ :  if first day of week is `Tuesday`, what week number in month will be follow in `15th June 2015` as one of the date.
		```javascript
			DateLibrary.getWeekNumber(new Date("2015-06-15"),
				{operationType:"Calendar_Week_of_Month",
					startDayOfWeek: "Tuesday"}) // Output : 3
		```
		- _Steps_			
			- find week count of given date month(Tuesday as Start day of week) [`3`]
			- total week count is [`3`]

	* _example3_
		- _Description_ :  what week number in month by days distribution will be follow in `15th June 2015` as one of the date.
		```javascript
			DateLibrary.getWeekNumber(new Date("2015-06-15"),
				{operationType:"Week_of_Month_by_Days_Distribution_for_as_Weeks",
					"28days":[5,6,5,6,6],"29days":[5,6,6,6,6],"30days":[6,6,6,6,6],"31days":[5,5,5,5,5,6]}) // Output : 3
		```
		- _Steps_			
			- find total days in month [`30`]
			- find week count given date follow in which week [`6+6+6`=`18`]
			- total week count is [`3`]


- DateLibrary.getDateDifference(fromDate,toDate,{JSON Object})

	* _example1_
		- _Description_ :  This takes three arguments from Date, to Date and JSON Object .It returns difference between them(base on granularityType days).
		```javascript
			DateLibrary.getDateDifference(new Date("2016-04-01"),new Date("2016-04-16"),
				{granularityType: "days"}) //output 15
		```

	* _example2_
		- _Description_ :  This takes three arguments from Date , to Date and JSON Object .It returns difference between them(base on granularityType seconds).
		```javascript
			DateLibrary.getDateDifference(new Date("2016-04-01 12:30:59"),new Date("2016-04-16 15:45:59"),
				{granularityType: "seconds"}) //output 1307700
		```


- DateLibrary.getDifferenceInDays(fromDate,toDate,[array of excluded Date Object],[array of excluded days])

	* _example1_
		- _Description_ :  This takes two arguments from Date and to Date.It returns difference between them.
		```javascript
			DateLibrary.getDifferenceInDays(new Date("2016-04-01"),new Date("2016-04-16"))//output 15
		```

	* _example2_
		- _Description_ :  This takes four arguments from Date, to Date and array of dates to be excluded and empty array exclude days.It returns difference between them.
		```javascript
			DateLibrary.getDifferenceInDays(new Date("2016-04-01"),new Date("2016-04-16"),
				[new Date("2016-04-05"),new Date("2016-04-06")],[])//output 13
		```

	* _example3_
 	 - _Description_ :  This takes four arguments from Date, to Date and array of dates to be excluded and array of days to be excluded.It returns difference between them.
 	 ```javascript
 		 DateLibrary.getDifferenceInDays(new Date("2016-04-01"),new Date("2016-04-16"),
		 	[new Date("2016-04-05"),new Date("2016-04-06")],["friday"])//output 10
 	 ```

- DateLibrary.getNumberToTimeStr(timeString, {JSON Object})

	* _example1_
		- _Description_ :  This takes two arguments timeString and JSON Object. It returns time.
		```javascript
			DateLibrary.getNumberToTimeStr("345", {delimiter: ":"}) //output 00:03:45
		```

	* _example2_
		- _Description_ :  This takes two arguments timeString and JSON Object. It returns time.
		```javascript
				DateLibrary.getNumberToTimeStr("5", {delimiter: "-"}) //output 00-00-05
	```
	* _example3_
		- _Description_ :  This takes two arguments timeString and JSON Object. It returns time.
		```javascript
				DateLibrary.getNumberToTimeStr("145635", {delimiter: "~"}) //output 14~56~35
		```

- DateLibrary.julianToDate(julianString, timeString)

 	* _example1_
 		- _Description_ :  This takes two arguments julianString and timeString (optional). It returns date object.
 		```javascript
 			  DateLibrary.julianToDate("102536") //output Fri Jun 20 2003 00:00:00
 		```
 	* _example2_
	 	- _Description_ :  This takes two arguments timeString and JSON Object. It returns time.
	 	```javascript
	 			DateLibrary.julianToDate("115536","152645") //output Sun Jun 19 2016 15:26:45
	 	```
