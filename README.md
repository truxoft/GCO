# GCOverrides
##### Garmin Connect Overrides - local bugfixes and enhancements of Garmin Connect Web 
The Chrome browser allows the user to override the look, the behaviour, and even 
(to certain extent) the functionality of a remote website. GCOverrides take the 
advantage of this Chrome feature and try to fix some known bugs of the Garmin Connect
Web appliaction, adding also some supplementary functionality not available in the
original version.

The overrides have no ability to communicate directly with the Garmin device. They can
only influence the way the data from Garmin Connect are being presented to the local user 
of the given Chrome instance.

## Current Features
* **Weight - 6 Months Report** - brigns back the 6 Months report plotting all weight data within the 6 motnhs period (not only monthly averages like the 12 Months report)
* **Activity Overlays bugfix** - adds missing overlays and their labels on zoomed version of graphs on the Activity pages

## Prerequisites
* ** Garmin Connect account ** - typically a Garmin Connect user owns a Garmin device (usually a smart watch), though there are people using GC without owning a Garmin device, importing data from devices of other brands.
* ** Chrome Browser ** - you need to own a recent version of the Chrome browser, supporting the overlays (available since ~2018)

## Instalation
1. Download the GCO-master.zip from https://github.com/truxoft/GCO/archive/master.zip
1. Unzip it into your Documents folder, on the desktop, or into another location of your choice
1. In Chrome, hit the key combination **Ctrl+Shift+i** (on Windows) to launch the DevTools, or do so through the Chrome menu
1. Go to the **Sources** tab of the DevTools pane or window
1. Click **Overrides** in the top-left corner of devtools (It might be behind the » menu)
1. Click **Select folder for overrides** and choose the folder **GCO-master** in the location you used for unzipping the installtion package
1. Click **Allow** on the pop-up bar at the top of DevTools that will appear!
1. Verify that the checkbox **Enable Local Overrides** in the bar above the folder name is checked
1. Close the DevTools or go back to the Chrome browser and load (or reload) the Garmin Connect website. If you see, at the center of the top of the website, a gray label **GCOverrides**, the installation was successfull, and the bugfixes and additional features of GCO shoud be active

## FAQ
* currently no questions were asked

## Future Plans
There are plans for adding a number of other bugfixes and enhancements, but there is currently no schedule. Some features may be removed
in future, if the functionality of the original website no more require the override, or when the original override stops functioning due to changes on the website. 

## Legal Notes
Garmin, Garmin Connect, and any other registered trademarks or copyrighted terms are the property of their owners, and all rights may be reserved. 
We are in **no affiliation with Garmin**. By installing the overrides you may be bypassing some of the default functionality of the original
website. Although we try avoding any conflicts, and try preserving the original functionality as much as possible, the overrides may, in some 
exceptional cases, cause inexpected or undocumented behaviour. When in doubts, you can disable the overrides instantly by simply unchecking
the Overrides in Chrome Dev Tools (on the same place you enabled them during the installation). 

## Safety and Privacy 
GCOverrides in no way impact the data on your device, or in your Garin Connect account. The overrides, being installed on your computer, and having open source, are safe, and in no way expose your data. The overrides do not send any data to any party. They do not use any cookies, or any local or remote storage of data. No personal data is being collected, and no registrations or emails are needed for the usage. GCOverrides do **not** use your user name, your email address, your password, or any other personal data. We never contact users of GCOverrides, except of informing them through the GitHub, or by posting informtaion on community forums such as https://forums.garmin.com/. We never send emails to GCOverrides users, and we do not have their addresses, unless they contact us.

