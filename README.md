# Intune-Device-Tracker
This is a Google Apps Script that retrieves the name of the device that is registered to an Intune user in Azure AD. The primary user UPN is stored in a Google Sheet, and the script retrieves the device name for each user and writes the results to the sheet.

## Sheet Requirements
This script assumes that you have a Google Sheet with the following requirements:

1. A sheet named "Intune Tracker" exists in the Google Sheet.
2. The "Primary user UPN" column contains the primary user UPN for each device.
3. The "Devices" column is empty and will be used to store the device names.
4. The script has authorization to access the Google Sheet.
5. The script is authorized to access the Microsoft Graph API.

Make sure that your Google Sheet meets these requirements before running the script.

## Usage
To use this script:

1. Open the Google Sheet where you want to track Intune devices.
2. Click on `Tools` and then `Script editor`.
3. Copy and paste the code from this repository into the editor.
4. Save the script with a name of your choice.
5. Run the `getAzureDevices` function by clicking on the play button or by going to Run > `getAzureDevices`.
6. The script will retrieve the device name for each user and write the results to the sheet.

## Notes
* The script assumes that the primary user UPN is in the "Primary user UPN" column of the sheet.
* The script writes the device name to the "Devices" column of the sheet.
* The script uses the Microsoft Graph API to retrieve the device name. Make sure that you have the necessary permissions to access the API.
* The script requires the authorization scope `https://www.googleapis.com/auth/script.external_request` to be enabled in the script's Cloud Console project.

## Credits
This script was created by a Google Developer.
