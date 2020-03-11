# GCOverrides
##### [Garmin Connect Overrides](https://github.com/truxoft/GCO) - local bugfixes and enhancements of [Garmin Connect Web](https://connect.garmin.com/) 
The Chrome browser allows the user to override the look, the behaviour, and even (to certain extent) the functionality of a remote website. GCOverrides take the advantage of this Chrome feature, and try to fix some known bugs of the Garmin Connect Web application, adding also some supplementary functionality not available in the original version.

*The overrides have no ability to communicate directly with the Garmin device. They can only influence the way the data from Garmin Connect is being presented to the local user of the given Chrome instance.*

## Current Features (v1.13)
* **Weight - 6 Months Report** - brings back the 6 Months report plotting all weight data within the 6 motnhs period (not only monthly averages like the 12 Months report does)
* **Activity Overlays bugfix** - adds missing overlays, their labels and titles, on zoomed graphs on the Activity pages
* **Bugfix of Floors per Minute** - the value on the detailed page of a Floor Climbing activity needs to be devided by 60 to show the true pace
* **Custom Sleep Goal** - the default fixed 8h sleep goal can be now adjusted in the [GCO Settings](#Settings)
* **Conversion of Calories to kilojoules** on the Calories In/Out page and on the Dashboard; needs to be enabled in the [GCO Settings](#Settings)
* **Adjustable Y-axis on Graphs** - turns the majority of graphs to have adjustable Y-Axis (with the help of selecting a rectangle of the current graph). Please note, that due to the compression of JavaScript files and the use of numeric chunks in GC, this feature may require frequent updates, and/or may not work for everyone. Searching for a more stable hack.
* **Panning of Graphs** - the user can press the Shift key and drag the mouse in order to pan a zoomed graph (same limitations as at the previous feature)
* **Exportable Graphs** - additional Export menu at zoomed graphs allowing the export of graphs as images or PDF
* **Enhanced Graph Tooltips** - Distance added to all time-based activity graph tootips; improved formatting of tooltips on zoomed versions
* **Hiding Golf** - optional hiding of Golf from the Side Menu and from the Gear Menu; needs to be enabled in the [GCO Settings](#Settings)
* **Hiding Model-Based Badges** - badges designed only for exclusive watches may be hidden from the list of available badges ([configurable](#Settings))
* **Enabling manual date input in Reports** - in the native version, on the Progress Summary page of Reports, the date can only be picked from the Calendar. Now you can enter it manually.
* **Diving Distance** - information about the direct distance between the entry and the exit locations of a dive
* ... more to come

For details, please have a look at the [CHANGELOG](https://github.com/truxoft/GCO/blob/master/CHANGELOG.txt)

## Prerequisites
* **Garmin Connect account** - typically a Garmin Connect user also owns a Garmin device (usually a smart watch), though there are people using GC without owning a Garmin device, importing data from devices of other brands.
* **Chrome Browser** - you need to own a recent version of the Chrome browser, supporting the local overrides (available since ~2018)

## Installation
1. Download the [master.zip](https://github.com/truxoft/GCO/archive/master.zip)
1. Unzip it into your Documents folder, on the desktop, or into another location of your choice
1. In Chrome, hit the key combination **Ctrl+Shift+i** (on Windows) to launch the **DevTools**, or do so through the Chrome menu
1. Go to the **Sources** tab of the DevTools pane or window
1. Click **Overrides** in the top-left of DevTools (It might be behind the **»** menu)
1. Click **Select folder for overrides** and choose the folder **GCO-master** in the location you used for unzipping the installtion package
1. Click **Allow** on the pop-up bar at the top of DevTools that will appear!
1. Verify that the checkbox **Enable Local Overrides** in the bar above the folder name is checked
1. Detach and minimize the DevTools pane, or go back to the Chrome browser and load (or reload) the Garmin Connect website. If you see, at the center of the top of the website, a gray label **GCOverrides**, the installation was successfull, and the bugfixes and additional features of GCO shoud be active

**Note:** The DevTools pane **must stay open** to keep the Local Overrides working. You can detach the DevTools pane from the browser, and minimize it (see the context menu under the tripple dot symbol in the upper right corner of the DevTools for the detachment option). Keep also on mind, that the DevTools are only active on the browser tab, where they were started. If you open another tab with Garmin Connect, you need to start the DevTools with Ctrl+Shift+i on that tab, too.

## Settings
Some GCO features allow the user to customize certain parameters. Since the version 0.05, it is for example the sleeping goal. Since GCO has no access to your device, to your disk, or to your GC account settings, the custom settings need to be stored in one of the override files. For editing the parameters, please open the override folder **GCO-master** and navigate to the file **GCO-master\sso.garmin.com\sso\js\gauth-widget.js**. Open the file in the DevTools pane, or in a text editor, like for example the Notepad, search the section "GCOverrides SETTINGS", and edit the values to adjust the parameters.

Many parameters take the values 'false' or 'true' only. The parameter 'gcoHideBadges' contains a list of several international variants of the word 'watch' for excluding the watch-based models from the available list. Add your own translation (if not included yet), or any addtional keywords from the description of badges you want to exclude. Keep the parameter 'gcoHideBadges' empty, if you do not wish to hide any available badges.

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
* HR Zones overlays on activity graphs
* Assign gear by sport subcategory
* Graphs and averages for a selected lap of an activity
* Averages and totals for a selection of an activity graph
* Configurable default Elevation Correction
* Center Courses map to the current detected location
 

## Legal Notes
Garmin, Garmin Connect, and any other registered trademarks or copyrighted terms are the property of their owners, and all rights may be reserved. 

We are in **no affiliation with Garmin** (except of owning Garmin devices, and being regular users of Garmin Connect). By installing the overrides you may be bypassing some of the default functionality of the original website. Although we try avoding any conflicts, and try preserving the original functionality as much as possible, the overrides may, in some exceptional cases, cause inexpected or undocumented behaviour. When in doubts, you can disable the overrides instantly by simply closing the DevTools pane of the browser. 

GCOverrides are released under the [GPL v3 license](https://github.com/truxoft/GCO/blob/master/LICENSE)

## Safety and Privacy 
GCOverrides in no way impact the data on your device, or in your Garmin Connect account. The overrides, being installed on your computer, and having open source, are safe, and in no way expose your data. The overrides do not send any data to any party. They do not use any cookies, or any local or remote storage of data. No personal data is being collected, and no registrations, paswords, personal data, or emails are needed for the usage. GCOverrides do **not** use your user name, your email address, your password, or any other personal data. We never contact users of GCOverrides, except of informing them through [GitHub](https://github.com/truxoft/GCO), or by posting informtaion on community forums such as https://forums.garmin.com/. We never send emails to GCOverrides users, and we do not have their addresses, unless they contact us.

## Support
This is a volunteer project, and we may not be able to cope with numerous support request, so before trying to contact us, please make sure you are using the latest version. Also please try searching for answers in the FAQ section of the latest version of this README file, and in the thread **[Introducing GCOverrides](https://forums.garmin.com/apps-software/mobile-apps-web/f/garmin-connect-web/214055/introducing-gcoverrides)** on the [Garmin Connect Web Forum](https://forums.garmin.com/apps-software/mobile-apps-web/f/garmin-connect-web).

## Author
GCOverrides were first created on **30th January 2020** by **Ivo Truxa** and included the first two overrides of Garmin Connect

