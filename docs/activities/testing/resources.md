# Resources for Testing

## Test Environments

There are a number of Test Instances available and the following table compares their features, the most accurate 
representation of the Production System are CIN4 and the Model office.

??? info "Test Environment Table"

    | Feature \ System                  | PCMS                 | LCMS                 | MO                   | CPT                  | CPT2                 | CPT3                 | CIN2                 | CIN3                 | CIN4                 | CIN5                 |
    |-----------------------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|
    | Has instance of CMS Classic & WMS | :material-check: Yes | :material-check: Yes | :material-check: Yes | :material-check: Yes | :material-close: No  | :material-close: No  | :material-check: Yes | :material-check: Yes | :material-check: Yes | :material-check: Yes |
    | Hand instance of CMS Modern       | :material-check: Yes | :material-check: Yes | :material-check: Yes | :material-check: Yes | :material-check: Yes | :material-check: Yes | :material-check: Yes | :material-check: Yes | :material-check: Yes | :material-close: No  |
    | Has instance of MIS               | :material-check: Yes | ?                    | ?                    | :material-close: No  | :material-close: No  | :material-close: No  | :material-check: Yes | :material-close: No  | :material-check: Yes | :material-close: No  |
    | Has connection to CPS WAN         | :material-check: Yes | ?                    | :material-check: Yes | :material-close: No  | :material-close: No  | :material-close: No  | :material-check: Yes | :material-check: Yes | :material-check: Yes | :material-check: Yes |
    | Accessible remotely by CPS users  | :material-check: Yes | ?                    | :material-check: Yes | :material-close: No  | :material-close: No  | :material-close: No  | :material-check: Yes | :material-check: Yes | :material-check: Yes | :material-check: Yes |
    | Has connection to CJSE over PSN   | :material-check: Yes | :material-close: No  | ?                    | :material-close: No  | :material-close: No  | :material-close: No  | :material-close: No  | :material-check: Yes | :material-close: No  | :material-check: Yes |
    | Has Court Store connection        | :material-check: Yes | :material-close: No  | ?                    | :material-close: No  | :material-close: No  | :material-close: No  | :material-check: Yes | :material-close: No  | :material-check: Yes | :material-close: No  |
    | Has DCS connection                | :material-check: Yes | :material-close: No  | ?                    | :material-close: No  | :material-close: No  | :material-close: No  | :material-check: Yes | :material-close: No  | :material-check: Yes | :material-close: No  |
    | Has connection to email gateway   | :material-check: Yes | ?                    | ?                    | :material-close: No  | :material-close: No  | :material-close: No  | :material-check: Yes | :material-check: Yes | :material-check: Yes | :material-check: Yes |
    | Has an AEM Bundler service        | :material-check: Yes | ?                    | ?                    | :material-check: Yes | :material-close: No  | :material-close: No  | :material-check: Yes | :material-check: Yes | :material-check: Yes | :material-check: Yes |


Download an [Excel sheet](./CMS-environments.xlsx) of the above table.

## Access to Test Environments

The process for getting access to CIN2, 3, 4 and 5 is as follows

1. Navigate to the service request on [CPS ServiceNow Test Account Form](https://cpsprod1.service-now.com/sp?id=sc_cat_item&sys_id=3371d4e01b074110abed0e1ad34bcb9b)

2. With regard to the Name field, add your name if it is for a personal user account. If it is for a system account, 
add the name you want.

3. Add your Contact Number.

4. Add your Email address.

5. For Directorate, select HQ DID.

6. For What would you like to do? – select Create New CMS Test Account

7. For CMS Home Unit, enter Hull.

8. For CMS Additional Units, select none.

9. For CMS User Role, select admin.

10. For CMS Additional Roles, select none.

11. Select the name of the environment you want to access.

12. Add a Business Justification – e.g. Application development/support for the DDEI application which integrates with 
    CMS.

13. For Site, select your CPS office location. Mine is CPS - AGO Petty France London. I found this out by going to the 
    "Sent Items" folder in Outlook, right-clicked my email address and selected "Open Outlook Properties".

## How to get access to the Model Office

To request access to the Model Office you need to contact the relevant Contact for the area you are working in. For most 
developers in DID, this translates to the DTS contact in 
[the list of contacts for Model office accounts](https://cpsprod1.service-now.com/sp?id=kb_article&sys_id=82983a0f1b37dc9001c7cbfd1d4bcbe1).
