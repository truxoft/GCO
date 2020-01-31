# GCOverrides
##### [Garmin Connect Overrides](https://github.com/truxoft/GCO) - local bugfixes and enhancements of [Garmin Connect Web](https://connect.garmin.com/) 
The Chrome browser allows the user to override the look, the behaviour, and even (to certain extent) the functionality of a remote website. GCOverrides take the advantage of this Chrome feature, and try to fix some known bugs of the Garmin Connect Web application, adding also some supplementary functionality not available in the original version.

*The overrides have no ability to communicate directly with the Garmin device. They can only influence the way the data from Garmin Connect is being presented to the local user of the given Chrome instance.*

## Current Features
* **Weight - 6 Months Report** - brings back the 6 Months report plotting all weight data within the 6 motnhs period (not only monthly averages like the 12 Months report does)
* **Activity Overlays bugfix** - adds missing overlays and their labels on zoomed graphs on the Activity pages
* **Bugfix of Floors per Minute** - the value on the detailed page of a Floor Climbing activity needs to be devided by 60 to show the true pace
* **Custom Sleep Goal** - the default fixed 8h sleep goal can be now adjusted in the [GCO Settings](#Settings)
* **Conversion of Calories to kilojoules** - currently only on the Calories In/Out page; needs to be enabled in the [GCO Settings](#Settings)
* ... more to come

For details, please have a look at the [CHANGELOG](https://github.com/truxoft/GCO/blob/master/CHANGELOG.txt)

## Prerequisites
* **Garmin Connect account** - typically a Garmin Connect user also owns a Garmin device (usually a smart watch), though there are people using GC without owning a Garmin device, importing data from devices of other brands.
* **Chrome Browser** - you need to own a recent version of the Chrome browser, supporting the overlays (available since ~2018)

## Installation
1. Download the [master.zip](https://github.com/truxoft/GCO/archive/master.zip)
1. Unzip it into your Documents folder, on the desktop, or into another location of your choice
1. In Chrome, hit the key combination **Ctrl+Shift+i** (on Windows) to launch the **DevTools**, or do so through the Chrome menu
1. Go to the **Sources** tab of the DevTools pane or window
1. Click **Overrides** in the top-left of DevTools (It might be behind the **»** menu)
1. Click **Select folder for overrides** and choose the folder **GCO-master** in the location you used for unzipping the installtion package
1. Click **Allow** on the pop-up bar at the top of DevTools that will appear!
1. Verify that the checkbox **Enable Local Overrides** in the bar above the folder name is checked
1. Close the DevTools or go back to the Chrome browser and load (or reload) the Garmin Connect website. If you see, at the center of the top of the website, a gray label **GCOverrides**, the installation was successfull, and the bugfixes and additional features of GCO shoud be active

## Settings
Some GCO features allow the user to customize certain parameters. Since the version 0.05, it is for example the sleeping goal. Since GCO has no access to your device, to your disk, or to your GC account settings, the custom settings need to be stored in one of the override files. For editing the parameters, please open the override folder **GCO-master** and navigate to the file **GCO-master\tags.tiqcdn.com\utag\garmin\main\prod\utag.js**. Open the file in a text editor, like for example the Notepad, and search for the string "GCOverrides SETTINGS", or scroll down in the file to that section. You can edit the values within this section to adjust the parameters.

**Important:** Please note that the assignment of the value **must end with a semicolon**! Accidental deleting of the semicolon would prevent the override script from working.

## Updates
Updates do **not** happen automatically. When you encounter a problem, or want to use a new functionality, please download and the up-to-date [master.zip](https://github.com/truxoft/GCO/archive/master.zip). Unzip it into the same folder as the older version. Before unzipping the master.zip, please remove the old GCO-master folder. No other operations are needed.

Please note, that after reloading the GCOverride files, your cusomized [GCO Settings](#Settings) will be overwritten and have to be adjusted again!  

## FAQ
* currently no questions were asked

## Future Plans
There are plans for adding a number of other bugfixes and enhancements, but there is currently no schedule. Some features may be removed
in future, if the functionality of the original website no more requires the override, or when the override stops functioning due to the changes on the website. 

## Wish List
Some of the following wishes may be implemented in future, but some may be complicated or impossible to develop with the currently available means.
* Titles on full-size activity graphs
* Adjustable Y-axis of activity graphs
* Exporting/saving graphs as images
* HR Zones overlays on activity graphs

## Legal Notes
Garmin, Garmin Connect, and any other registered trademarks or copyrighted terms are the property of their owners, and all rights may be reserved. 

We are in **no affiliation with Garmin** (except of owning Garmin devices, and being regular users of Garmin Connect). By installing the overrides you may be bypassing some of the default functionality of the original website. Although we try avoding any conflicts, and try preserving the original functionality as much as possible, the overrides may, in some exceptional cases, cause inexpected or undocumented behaviour. When in doubts, you can disable the overrides instantly by simply unchecking the Overrides in Chrome Dev Tools (on the same place you enabled them during the installation), or by deleting the folder **GCO-master**. 

GCOverrides are released under the [GPL v3 license](https://github.com/truxoft/GCO/blob/master/LICENSE)

## Safety and Privacy 
GCOverrides in no way impact the data on your device, or in your Garmin Connect account. The overrides, being installed on your computer, and having open source, are safe, and in no way expose your data. The overrides do not send any data to any party. They do not use any cookies, or any local or remote storage of data. No personal data is being collected, and no registrations, paswords, personal data, or emails are needed for the usage. GCOverrides do **not** use your user name, your email address, your password, or any other personal data. We never contact users of GCOverrides, except of informing them through [GitHub](https://github.com/truxoft/GCO), or by posting informtaion on community forums such as https://forums.garmin.com/. We never send emails to GCOverrides users, and we do not have their addresses, unless they contact us.

## Support
This is a volunteer project, and we may not be able to cope with numerous support request, so before trying to contact us, please make sure you are using the latest version. Also please try searching for answers in the FAQ section of the latest version of this README file, and in the thread **[Introducing GCOverrides](https://forums.garmin.com/apps-software/mobile-apps-web/f/garmin-connect-web/214055/introducing-gcoverrides)** on the [Garmin Connect Web Forum](https://forums.garmin.com/apps-software/mobile-apps-web/f/garmin-connect-web).

## Author
GCOverrides were first created on **30th January 2020** by **Ivo Truxa** and included the first two overrides of Garmin Connect

