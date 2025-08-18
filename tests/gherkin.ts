
**Residential Lending QE**

---

### **Automation Tasks**

**Framework Enhancements**

- Refactored and updated the existing automation framework to improve scalability, maintainability, and efficiency.
- Restructured core modules and optimized test execution flow for better performance.

**Reusable Helper Functions**

- Developed a robust set of helper functions to standardize and simplify common actions across test cases.

**MFA Bypass Implementation**

- Successfully implemented a Multi-Factor Authentication (MFA) bypass mechanism for both the Loan Officer Dashboard (LOD) and Borrower portals.
- This enhancement enables automated tests to run without manual intervention, significantly improving test reliability.

**Test Case Coverage**

- **Loan Officer Portal**
    - Completed regression test automation for 65 test cases.
- **Borrower Portal**
    - Added sanity test cases covering key workflows and core functionalities.
    - Completed test automation for 39 test cases.

---

### **Manual Testing Tasks**

- Tested and provided feedback on Borrower Portal and Loan Officer Portal based on Business Release Notes **FR25.2**.
- Created regression test cases for MST, with **62 test cases completed**.





























TC001 | Create a New Loan Application

  Scenario: Create a new loan application with borrower details
    Given that the user is on the dashboard
    When the user clicks on the "New Application" button
    Then the "New Application" modal should be displayed

    When the user selects the loan type "Apply for a Mortgage"
    And the user selects "No" for the "Will the loan be to an entity?" checkbox
    And the user enters "John" in the "First Name" field
    And the user enters "Doe" in the "Last Name" field
    And the user enters "1234567890" in the "Mobile Number" field
    And the user enters "john.doe@example.com" in the "Email" field
    And the user selects "No" for "Is the borrower or any of the applicants currently an employee of City National Bank?" radio button
    And the user clicks the "Continue" button


TC002 | Navigating to Loan Details After Creating a Mortgage Loan

Scenario: Navigate to the loan details after creating a mortgage loan
    Given the user has successfully created a mortgage loan
    When the user clicks on the loan entry from the loan list
    Then the system should navigate to the "Loan Details" page
    And the "Borrower" section should be visible on the loan details page

|| Borrower Information || Personal Information

TC003 | Adding an Additional Borrower

Scenario: Add an additional borrower to a mortgage loan
    Given the user is on the "Loan Details" page
    And the "Borrower" section is open
    When the user clicks on "Add Additional Borrower"
    And the user enters "Jane" in the "First Name" field
    And the user enters "Smith" in the "Last Name" field
    And the user selects "Joint Credit" from the "Type of Credit" options
    And the user checks the checkbox for "Joint Credit"
    And the user enters "9876543210" in the "Mobile Number" field
    And the user enters "jane.smith@example.com" in the "Email" field
    And the user clicks the "Add Borrower" button
    Then the borrower should be added to the list successfully

TC004 | Validating Notification and Email Generation

Scenario: Validate the notification and email after adding a borrower
    Given that an additional borrower was successfully added
    Then a "New Application Notification" should be displayed to the user
    And an email should be sent to "jane.smith@example.com"
    And the email should attach the borrower digital link


TC005 | Updating and Removing the Borrower

Scenario: Update an existing additional borrower
    Given an additional borrower has been added
    When the user click on added additional borroweer arrow icon
    Then the user edits the borrower's "Mobile Number" to "1112223333"
    And the user updates the email to "jane.updated@example.com"
    And clicks "Update"
    Then the borrower's details should be updated successfully

TC006 | Remove an additional borrower from the loan

  Scenario: Remove an additional borrower from the loan
    Given the borrower "Jane Smith" exists in the additional borrowers list
    When the user clicks on "Remove Borrower"
    Then the borrower should be removed from the application


TC007 | Update Borrower's Personal Information

Scenario: Edit and save borrower's personal information
    Given the user is on the "Loan Details" page
    And the user navigates to the "Borrower Information" section
    And the user opens the "Personal Information" tab

    When the user updates the "First Name" field to "Michael"
    And updates the "Middle Name" field to "A."
    And updates the "Last Name" field to "Johnson"
    And selects "Jr." from the "Suffix" dropdown
    And clicks the "Save and Continue" button
    Then the updated personal information should be saved successfully

TC008 | Add an Alternative Name

Scenario: Add an alternative name to borrower's personal information
    Given the user is on the "Personal Information" tab under "Borrower Information"
    When the user clicks on "Alternative Name"
    And the user enters "Mike J" in the "Name" field
    And clicks the "ADD" button
    Then the alternative name should be added successfully
    And the new alternative name should appear under the Alternative Name list


TC009 | Update an Existing Alternative Name
  
Scenario: Update an existing alternative name
    Given an alternative name "Mike J Smith" exists for the borrower
    And updates the "Alternative Name" to "Michael J"
    And clicks the "Update" button
    Then the updated alternative name should be saved and reflected in the list




TC010 | Remove an Alternative Name
  
Scenario: Remove an existing alternative name
    Given an alternative name "Michael J Smithson" exists for the borrower
    When the user clicks the "Remove" button next to the alternative name
    Then the alternative name should be removed from the list



TC011 | Update Borrower Identification Information
  
Scenario: Update SSN, Date of Birth, and Citizenship
    Given the user is on the "Personal Information" tab under "Borrower Information"
    When the user enters "123-45-6789" in the "Social Security Number" field
    And enters "01/15/1990" in the "Date of Birth" field
    And selects "United States" from the "Citizenship" dropdown
    And clicks the "Save and Continue" button
    Then the identification information should be saved successfully
    And the updated values should be displayed correctly in the personal information summary




TC012 | Update Borrower Family Information
  
Scenario: Update marital status and number of dependents
    Given the user is on the "Personal Information" tab under "Borrower Information"
    When the user selects "Married" from the "Marital Status" dropdown
    And enters "2" in the "Number of Dependents" field
    And clicks the "Save and Continue" button
    Then the family information should be saved successfully
    And the updated marital status and dependents count should be displayed in the summary




TC013 | Update Trust or Entity Ownership Status
  
Scenario: Indicate that a trust or other entity will be listed on title
    Given the user is on the "Personal Information" tab under "Borrower Information"
    When the user checks "Yes" for the question "Will the Borrower have a Trust or other entity that will be listed on title?"
    And clicks the "Save and Continue" button
    Then the title ownership information should be saved successfully



TC014 | Update Borrower Contact Information
  Scenario: Update home phone, cell phone, work phone, work extension, and email
    Given the user is on the "Contact Information" section under "Borrower Information"
    When the user enters "555-123-4567" in the "Home Phone" field
    And enters "555-987-6543" in the "Cell Phone" field
    And enters "555-111-2222" in the "Work Phone" field
    And enters "1234" in the "Work Extension" field
    And enters "borrower.updated@example.com" in the "Email" field
    And clicks the "Save and Continue" button
    Then the updated contact information should be saved successfully


|| Borrower Information || Residence History


TC001 | Update Borrower Current Address in Residence History
  
 Scenario: Update borrower's current residence details
    Given the user is on the "Residence History" section under "Borrower Information"
    When the user updates the "Street Address" to "123 Main St"
    And updates the "Unit Number" to "Apt 4B"
    And updates the "City" to "Los Angeles"
    And selects "California" from the "State" dropdown
    And updates the "Zip Code" to "90001"
    And updates the "County" to "Los Angeles County"
    And selects "United States" from the "Country" dropdown
    And enters "2" in the "Years at Address" field
    And enters "6" in the "Months at Address" field
    And selects "Rent" from the "Housing" dropdown
    And enters "1500" in the "Monthly Payment" field
    And clicks the "Save and Continue" button
    Then the current address information should be saved successfully




TC002 | Add Former Address in Borrower Residence History
   
Scenario: Add a new former address to borrower's residence history
    Given the user is on the "Residence History" section under "Borrower Information"
    When the user clicks the "FORMER ADDRESS" button
    And enters "456 Elm Street" in the "Street Address" field
    And enters "Unit 5C" in the "Unit Number" field
    And enters "San Diego" in the "City" field
    And selects "California" from the "State" dropdown
    And enters "92101" in the "Zip Code" field
    And enters "San Diego County" in the "County" field
    And selects "United States" from the "Country" dropdown
    And enters "3" in the "Years at Address" field
    And enters "0" in the "Months at Address" field
    And selects "Own" from the "Housing" dropdown
    And enters "1800" in the "Monthly Payment" field
    And clicks the "ADD" button
    Then the former address should be added to the borrower residence history list




TC003 | Update an Existing Former Address
   
Scenario: Edit an existing former address
    Given a former address "456 Elm Street, Unit 5C" exists in the borrower's residence history
    When the user clicks the "Arrow" icon next to that former address
    And updates the "Street Address" to "789 Oak Avenue"
    And updates the "City" to "San Jose"
    And updates the "Zip Code" to "95112"
    And changes "Years at Address" to "2"
    And clicks the "UPDATE" button
    Then the former address should be updated successfully




TC004 | Remove Former Address from Residence History
  
 Scenario: Delete a former address from borrower's residence history
    Given a former address "789 Oak Avenue, San Jose" exists in the borrower's residence history
    When the user clicks the "Remove" icon next to the former address
    Then the former address should be removed from the residence history list



TC005 | Update Mailing Address Different from Current Address
  
Scenario: Enter a different mailing address when it is not the same as the current address
    Given the user is on the "Mailing Address" section under "Borrower Information"
    And the "Use current address" checkbox is checked by default
    When the user unchecks the "Use current address" checkbox
    And enters "321 Maple Drive" in the "Street Address" field
    And enters "Unit 2A" in the "Unit" field
    And enters "Irvine" in the "City" field
    And selects "California" from the "State" dropdown
    And enters "92620" in the "Zip Code" field
    And enters "Orange County" in the "County" field
    And selects "United States" from the "Country" dropdown
    And clicks the "Save and Continue" button
    Then the mailing address should be saved successfully






|| Borrower Information || Current Employment 

TC001 | Add Current Employment Information
  
Scenario: Add current employment details
    Given the user is on the "Employment & Income" section under "Borrower Information"
    When the user edits the "Current Employment" entry
    And enters "Tech Solutions Inc." in the "Employer or Business Name" field
    And enters "555-444-1234" in the "Phone Number" field
    And enters "Suite 300" in the "Unit" field
    And enters "San Francisco" in the "City" field
    And selects "California" from the "State" dropdown
    And enters "94105" in the "Zip Code" field
    And selects "United States" from the "Country" dropdown
    And enters "Sarah Connor" in the "Manager" field
    And enters "01/10/2020" in the "Start Date" field
    And clicks the "Save and Continue" button
    Then the current employment information should be updated successfully

TC002 | Update Current Employment Information
  
Scenario: Edit current employment details
    Given the user is on the "Employment & Income" section under "Borrower Information"
    When the user edits the "Current Employment" entry
    And enters "Tech Solutions Inc." in the "Employer or Business Name" field
    And enters "555-444-1234" in the "Phone Number" field
    And enters "Suite 300" in the "Unit" field
    And enters "San Francisco" in the "City" field
    And selects "California" from the "State" dropdown
    And enters "94105" in the "Zip Code" field
    And selects "United States" from the "Country" dropdown
    And enters "Sarah Connor" in the "Manager" field
    And enters "01/10/2020" in the "Start Date" field
    And clicks the "Save and Continue" button
    Then the current employment information should be updated successfully

TC003 | Remove Current Employment
  
Scenario: Delete a Current employment record
    Given the user is on the "Employment & Income" section under "Borrower Information"
    And a Current employment record "FutureTech Industries" exists
    When the user clicks the "Remove" icon next to that previous employment
    Then, the previous employment record should be removed from the employment history list



TC004 | Add Previous Employment Information
  
 Scenario: Add a new previous employment record
    Given the user is on the "Employment & Income" section under "Borrower Information"
    When the user clicks the "Add Previous Employment" button
    And enters "FutureTech Industries" in the "Employer or Business Name" field
    And enters "555-123-0000" in the "Phone Number" field
    And enters "456 Innovation Blvd" in the "Street Address" field
    And enters "Unit 12A" in the "Unit" field
    And enters "Denver" in the "City" field
    And selects "Colorado" from the "State" dropdown
    And enters "80202" in the "Zip Code" field
    And selects "United States" from the "Country" dropdown
    And enters "Systems Analyst" in the "Position or Title" field
    And enters "03/01/2016" in the "Start Date" field
    And enters "12/31/2017" in the "End Date" field
    And clicks the "Add" button
    Then the new previous employment record should be added successfully


TC005 | Update Borrower's Previous Employment Information
  
Scenario: Edit previous employment details
    Given the user is on the "Employment & Income" section under "Borrower Information"
    And a previous employment record exists
    When the user clicks "Arrow" on the previous employment entry
    And updates the "Employer or Business Name" to "Global Tech Corp"
    And updates the "Phone Number" to "555-999-8888"
    And updates the "Street Address" to "789 Innovation Way"
    And updates the "Unit" to "Suite 5B"
    And updates the "City" to "Austin"
    And selects "Texas" from the "State" dropdown
    And updates the "Zip Code" to "73301"
    And selects "United States" from the "Country" dropdown
    And updates the "Position or Title" to "Software Engineer"
    And sets the "Start Date" to "01/01/2018"
    And sets the "End Date" to "12/31/2019"
    And clicks the "Update" button
    Then the previous employment information should be saved successfully



TC006 | Remove Previous Employment Information
  
Scenario: Delete a previous employment record
    Given the user is on the "Employment & Income" section under "Borrower Information"
    And a previous employment record "FutureTech Industries" exists
    When the user clicks the "Remove" icon next to that previous employment
    Then the previous employment record should be removed from the employment history list
    And a confirmation message should be displayed to the user



|| Borrower Information || Credit Verification


TC001 | Add New Income Source
  
Scenario: Add a new other income source
    Given the user is on the "Other Income" section under "Borrower Information"
    When the user clicks the "Add Income Source" button
    And selects "Alimony" from the "Income Source" dropdown
    And enters "1200" in the "Monthly Income" field
    And clicks the "Add" button
    Then the new income source should be added successfully


TC002 | Update an Existing Income Source

  Scenario: Update an existing income source
    Given an income source "Alimony" with a monthly income of "1200" exists
    And changes the "Income Source" to "Child Support"
    And updates the "Monthly Income" to "1500"
    And clicks the "Update" button
    Then the income source should be updated successfully
    And the updated details should be displayed in the income list

TC003 | Remove an Existing Income Source
  
Scenario: Remove an existing income source
    Given an income source "Child Support" exists in the borrower's other income section
    When the user clicks the "Remove" icon next to the income source
    Then the income source should be removed from the list

  


|| Assets & Liabilities || Assets Accounts



TC001 | Add a Deposit Account
  
Scenario: Add a new deposit account
    Given the user is on the "Assets & Liabilities > Asset Accounts" section
    When the user clicks the "DEPOSIT ACCOUNTS" button
    And selects "Savings" from the "Account Type" dropdown
    And enters "ABC Bank" in the "Financial Institution" field
    And enters "123456789" in the "Account Number" field
    And enters "5000" in the "Cash or Market Value" field
    And clicks the "Add" button
    Then the deposit account should be added successfully


TC002 | Update an existing deposit account
  
  Scenario: Update an existing deposit account
    Given a deposit account with Account Type "Savings" and Institution "ABC Bank" exists
    And updates the "Financial Institution" to "XYZ Bank"
    And updates the "Account Number" to "987654321"
    And updates the "Cash or Market Value" to "7500"
    And clicks the UPDATE button
    Then the deposit account should be updated successfully


TC003 | Remove an existing deposit account
  
Scenario: Delete an existing deposit account
    Given a deposit account for "XYZ Bank" exists in the deposit accounts list
    When the user clicks the  "Remove" icon next to that account
    Then the deposit account should be removed from the list
    And a confirmation message should be displayed


|| Assets & Liabilities || Assets Accounts

TC001 | Add a New Investment Account
  
Scenario: Add a new investment account
    Given the user is on the "Assets & Liabilities > Asset Accounts" section
    When the user clicks the "INVESTMENT ACCOUNT" button
    And selects "Savings" from the "Account Type" dropdown
    And enters "WealthFront Investments" in the "Financial Institution" field
    And enters "INV-00112233" in the "Account Number" field
    And enters "25000" in the "Cash or Market Value" field
    And clicks the "Add" button
    Then the investment account should be added successfully


TC002 | Update an existing investment account
   
Scenario: Update an existing investment account
    Given an investment account for "WealthFront Investments" exists
    And updates the "Financial Institution" to "Vanguard"
    And updates the "Account Number" to "INV-00998877"
    And updates the "Cash or Market Value" to "30000"
    And clicks the "UPDATE" button
    Then the investment account should be updated successfully


TC003 | Remove an existing investment account
   
Scenario: Delete an existing investment account
    Given an investment account for "Vanguard" exists in the investment accounts list
    When the user clicks the "Remove" icon next to that account
    Then the investment account should be removed from the list



TC004 | Update Life Insurance Account Information
   
 Scenario: Edit an existing life insurance account
    Given a life insurance account exists under "Assets & Liabilities > Asset Accounts"
    When the user clicks the "Arrow" icon next to the life insurance account
    And updates the "Financial Institution" to "ABC Life Insurance Co."
    And updates the "Account Number" to "LIFE-123456"
    And updates the "Cash or Market Value" to "10000"
    And clicks the "Save and Continue" button
    Then the life insurance account should be updated successfully


|| Assets & Liabilities || Other Assets & Credits 

TC001 | Add New Other Asset or Credit

Scenario: Add a new other asset or credit
    Given the user is on the "Assets & Liabilities > Other Assets & Credits" section
    When the user clicks the "Other Assets and Credits" button
    And selects "Cash on hand" from the "Account Type" dropdown
    And enters "2000" in the "Cash or Market Value" field
    And clicks the "Add" button
    Then the new asset should be added successfully



TC002 | Update an Existing Other Asset or Credit

Scenario: Update an existing other asset or credit
    Given an "Other Asset" with type "Cash on hand" exists
    When the user clicks the "Arrow" button next to that asset
    And updates the "Cash or Market Value" to "3000"
    And clicks the "Update" button
    Then the other asset or credit should be updated successfully


TC003 | Remove an Other Asset or Credit

 Scenario: Remove an existing other asset or credit
    Given an "Other Asset" with type "Cash on hand" exists
    When the user clicks the "Remove" icon next to that item
    Then the item should be removed from the list



TC004 | Add New Purchase Credit

Scenario: Add a new purchase credit
    Given the user is on the "Assets & Liabilities > Other Assets & Credits" section
    When the user clicks the "Purchase Credit" button
    And selects "Sweat Equity" from the "Account Type" dropdown
    And selects "Employer" from the "Source Type" dropdown
    And enters "10000" in the "Cash or Market Value" field
    And clicks the "Add" button
    Then the purchase credit should be added successfully



TC005 | Update an Existing Purchase Credit 

Scenario: Update an existing purchase credit using arrow button
    Given a purchase credit of type "Sweat Equity" exists
    When the user clicks the arrow button next to the purchase credit entry
    And updates the "Cash or Market Value" to "12000"
    And clicks the  "Update" button
    Then the purchase credit should be updated successfully


TC006 | Remove a Purchase Credit  

Scenario: Remove a purchase credit without confirmation
    Given a purchase credit with value "12000" exists
    When the user clicks the "Remove" button next to the purchase credit
    Then the purchase credit should be removed immediately



|| Assets & Liabilities || Liability Accounts 



TC001 | Add New Liability Account (Mortgage)  

Scenario: Add a new liability account for a mortgage
    Given the user is on the "Assets & Liabilities > Liability Accounts" section
    When the user clicks the "Liability Account" button
    And selects "Mortgage" from the "Account Type" dropdown
    And enters "ABC Mortgage Corp" in the "Company Name" field
    And enters "MORTGAGE-456789" in the "Account Number" field
    And enters "200000" in the "Unpaid Balance" field
    And enters "1500" in the "Monthly Payment" field
    And enters "120" in the "Remaining Payments" field
    And clicks the "Add" button
    Then the liability account should be added successfully



TC002 | Update an Existing Liability Account 

 Scenario: Update an existing liability account
    Given a mortgage liability account for "ABC Mortgage Corp" exists
    When the user clicks the "Arrow" button next to the liability account
    And updates the "Company Name" to "XYZ Mortgage LLC"
    And updates the "Unpaid Balance" to "180000"
    And updates the "Monthly Payment" to "1400"
    And updates the "Remaining Payments" to "100"
    And clicks the "Update" button
    Then the liability account should be updated successfully



TC003 | Remove a Liability Account

Scenario: Remove an existing liability account
    Given a liability account for "XYZ Mortgage LLC" exists in the liability accounts list
    When the user clicks the "Remove" button next to the account
    Then the liability account should be removed from the list



|| Assets & Liabilities || Other Liability & Expense 


TC001 | Add New Other Liability & Expense  

Scenario: Add a new other liability or expense
    Given the user is on the "Assets & Liabilities > Other Liability & Expense" section
    When the user clicks the "Other Liability & Expense" button
    And selects "Child Support" from the "Expense Type" dropdown
    And enters "Court Ordered Child Support" in the "Other Description" field
    And enters "Jane Doe" in the "Paid To" field
    And enters "24" in the "Number of Payments Remaining" field
    And enters "600" in the "Monthly Payment" field
    And clicks the "Add" button
    Then the other liability or expense should be added successfully



TC002 | Update an Existing Other Liability & Expense  

Scenario: Update an existing other liability or expense
    Given an expense record for "Child Support" paid to "Jane Doe" exists
    When the user clicks the "Arrow" button next to the expense record
    And updates the "Monthly Payment" to "700"
    And updates the "Number of Payments Remaining" to "18"
    And clicks the "Update" button
    Then the expense should be updated successfully



TC003 | Remove an Existing Other Liability & Expense

Scenario: Remove an existing other liability or expense
    Given an expense record for "Child Support" exists in the list
    When the user clicks the "Remove" button next to that entry
    Then the expense should be immediately removed from the list



|| Real Estate || 

TC001 | Add New Property 

 Scenario: Add a new property
    Given the user is on the "Real Estate" section
    When the user clicks the "Add Property" button
    And enters "456 Elm Street" in the "Street Address" field
    And enters "Unit 3B" in the "Unit Number" field
    And enters "Dallas" in the "City" field
    And selects "Texas" from the "State" dropdown
    And enters "75201" in the "Zip" field
    And selects "Dallas County" from the "County" dropdown
    And enters "350000" in the "Property Value" field
    And selects "Active" from the "Status" dropdown
    And selects "Investment" from the "Intended Occupancy" dropdown
    And selects "Tenant Occupied" from the "Current REO Occupancy" dropdown
    And enters "150" in the "Monthly Insurance" field
    And enters "250" in the "Monthly Taxes" field
    And enters "75" in the "Monthly Association" field
    And selects "Single-Family" from the "Property Type" dropdown
    And clicks the "Add" button
    Then the property should be added successfully



TC002 | Update Existing Property  

Scenario: Update an existing property
    Given a property at "456 Elm Street" exists in the property list
    When the user clicks the "Arrow" button next to that property
    And updates the "Property Value" to "375000"
    And updates the "Monthly Insurance" to "200"
    And updates the "Monthly Taxes" to "275"
    And updates the "Monthly Association" to "80"
    And selects "Multi-Family" from the "Property Type" dropdown
    And clicks the "Update" button
    Then the property information should be updated successfully



TC003 | Remove Existing Property

Scenario: Remove an existing property
    Given a property at "456 Elm Street" exists in the list
    When the user clicks the "Remove" button next to that property
    Then the property should be removed from the real estate properties list


|| Loan & Property || Loan & Property  


TC001 | Update Loan and Property Information  

Scenario: Update loan and property details
    Given the user is on the "Loan & Property > Loan & Property" section
    When the user selects "PUD" from the "Property Type" dropdown
    And selects "Second Home" from the "Occupancy" dropdown
    And selects "Existing" from the "Building Status" dropdown
    And enters "450000" in the "Sales Price" field
    And enters "460000" in the "Property Value" field
    And enters "360000" in the "Loan Amount" field
    And enters "10000" in the "Cash Out Amount" field
    And enters "789 Pine Avenue" in the "Street Address" field
    And enters "Unit 12C" in the "Unit" field
    And enters "Tampa" in the "City" field
    And selects "Florida" from the "State" or "Option" dropdown
    And enters "33602" in the "Zip" field
    And selects "Hillsborough County" from the "County" dropdown
    And enters "2" in the "Number of Units" field
    And enters "2015" in the "Year Built" field
    And enters "Lot 45, Block C, Sunrise Estates" in the "Legal Description" field
    And selects "09/15/2025" as the "Estimated Closing Date"
    And clicks the "Update" button
    Then the loan and property data should be updated successfully



TC002 | Update Escrow Information – Real Estate Taxes  

Scenario: Update real estate tax escrow details
    Given the user is on the "Escrow Information" section under "Loan & Property"
    When the user unchecks the "Waive Escrow" checkbox for "Real Estate Taxes"
    And enters "3600" in the "Annual" field
    And enters "300" in the "Monthly" field
    And clicks the "Save and continue" button



TC003 | Update Escrow Information – Hazard Insurance  

Scenario: Update hazard insurance escrow details
    Given the user is on the "Escrow Information" section under "Loan & Property"
    When the user unchecks the "Waive Escrow" checkbox for "Hazard Insurance"
    And enters "1200" in the "Annual" field
    And enters "100" in the "Monthly" field
    And clicks the "Save and Continue" button



TC004 | Update Title Information  

Scenario: Enter title and legal holding information
    Given the user is on the "Title Information" section under "Loan & Property"
    When the user enters "John A. Smith" in the "Name of Title" field
    And selects "Life Estate" from the "Title Held As" dropdown
    And checks the checkbox for "FHA Secondary Residence"
    And clicks the "Save and continue" button
    Then the title information should be updated successfully


|| Loan & Property || Other Mortgage Loans  


TC001 | Add New Other Mortgage Loan  

Scenario: Add a new other mortgage loan on the property
    Given the user is on the "Loan & Property > Other Mortgage Loans" section
    When the user clicks the "Add New Mortgage Loan on the Property" button
    And enters "ABC Lending Group" in the "Creditor Name" field
    And selects "First Lien" from the "Account Type" dropdown
    And enters "1200" in the "Monthly Payment" field
    And enters "180000" in the "Loan Amount" field
    And enters "200000" in the "Credit Limit" field
    And selects "Second Lien" from the "Lien Type" dropdown
    And clicks the "Add" button
    Then the mortgage loan should be added successfully



TC002 | Update an Existing Other Mortgage Loan  

  Scenario: Update an existing other mortgage loan
    Given an existing mortgage loan from "ABC Lending Group" is listed in the "Other Mortgage Loans" section
    When the user clicks the "Arrow" or arrow button next to the mortgage loan entry
    And updates the "Monthly Payment" to "1300"
    And updates the "Loan Amount" to "175000"
    And updates the "Credit Limit" to "210000"
    And changes the "Lien Type" to "First Lien"
    And clicks the Update" button
    Then the mortgage loan should be updated successfully




TC003 | Remove an Existing Other Mortgage Loan  

Scenario: Remove an existing other mortgage loan
    Given a mortgage loan from "ABC Lending Group" exists in the mortgage loans list
    When the user clicks the "Remove" button next to that loan entry
    Then the mortgage loan should be removed from the list



|| Loan & Property || Rental Income  


TC001 | Add Rental Income Entry  

Scenario: Add a new rental income entry
    Given the user is on the "Loan & Property > Rental Income" section
    When the user clicks the "Add Rent" button
    And enters "XYZ Mortgage Inc." in the "Creditor Name" field
    And selects "First Lien" from the "Account Type" dropdown
    And enters "1500" in the "Monthly Payment" field
    And enters "200000" in the "Loan Amount" field
    And enters "250000" in the "Credit Limit" field
    And selects "Second Lien" from the "Lien Type" dropdown
    And clicks the "Add" button
    Then the rental income entry should be added successfully


TC002 | Update an Existing Rental Income Entry  

Scenario: Update an existing rental income entry
    Given a rental income entry from "XYZ Mortgage Inc." exists in the list
    When the user clicks the "Arrow" or arrow button next to that entry
    And updates the "Monthly Payment" to "1600"
    And updates the "Loan Amount" to "195000"
    And updates the "Credit Limit" to "240000"
    And changes the "Lien Type" to "First Lien"
    And clicks the "Update" button
    Then the rental income entry should be updated successfully




TC003 | Remove an Existing Rental Income Entry  

Scenario: Remove an existing rental income entry
    Given a rental income entry from "XYZ Mortgage Inc." exists in the rental income list
    When the user clicks the "Remove" button next to that entry
    Then the rental income entry should be removed from the list



|| Loan & Property || Gifts & Grants  

TC001 | Add New Gift & Grant  

 Scenario: Add a new gift or grant
    Given the user is on the "Loan & Property > Gift & Grants" section
    When the user clicks the "Gift & Grant" button
    And selects "Grant" from the "Asset Type" dropdown
    And selects "Deposited" from the "Deposited" dropdown
    And selects "Employer" from the "Source" dropdown
    And enters "5000" in the "Cash or Market Value" field
    And clicks the "Add" button
    Then the gift or grant should be added successfully


TC002 | Update an Existing Gift & Grant Entry

Scenario: Update an existing gift or grant entry
    Given a gift or grant entry with source "Employer" and asset type "Grant" exists in the list
    When the user clicks the arrow button next to that entry
    And updates the "Cash or Market Value" to "6000"
    And changes the "Source" to "Family"
    And clicks the "Update" button
    Then the gift or grant entry should be updated successfully


TC003 | Remove an Existing Gift & Grant Entry  

 Scenario: Remove an existing gift or grant entry
    Given a gift or grant entry with source "Family" exists in the gift & grant list
    When the user clicks the "Remove" button next to that entry
    Then the gift or grant entry should be removed from the list



Playwright Automation Framework Enhancements (TypeScript)

To make our automation framework more robust, scalable, and maintainable, we propose the following enhancements:

1. Authentication Setup with Multiple Roles

Implement a structured authentication mechanism that supports different user roles (e.g., Admin, Borrower, Approver, Viewer).

Store credentials securely and allow role-based login directly within test cases.

Ensure role switching is handled efficiently without repeating code.

2. Test Data Management

Introduce a standardized test data strategy.

Create test data files in Excel (.xlsx) and JSON formats to support both structured and unstructured data needs.

Maintain test data in a central location for easy updates, version control, and reusability.

3. Helper Functions for Actions

Build a utility layer with reusable helper functions (e.g., click, type, dropdown select, API calls).

Reduce repetitive scripting effort and improve readability of tests.

Ensure consistent locator handling across tests.

4. Page Management via baseFixture

Move all Page Object Models (POMs) into baseFixture.

Allow seamless access to page instances directly in tests without redundant imports.

Improve code organization and scalability of the framework.

5. Reporting Improvements

Replace Allure Report with Playwright’s default reporter for better integration with trace files, video, and screenshots.

Enable detailed reporting of each test, including pass/fail reasons.

Provide clear insights for debugging failed cases.

6. Test Steps & Debugging

Add well-defined test steps in the code for better readability.

Make debugging easier by tracing exactly which step failed.

Provide a structured breakdown of test execution flow.

7. Custom Reporter Configuration

Develop a CustomReporterConfig to capture all console logs, API responses, and browser events.

Allow exporting logs in a structured format for post-analysis.

Ensure easy integration with external monitoring tools.

8. Mailer & Notification Integration

Build a mailer service to automatically send test execution reports.

Support integration with Slack, Microsoft Teams, and Email.

Enable real-time notifications for failures and execution summaries.

9. Centralized Test Configuration

Create a unified test config file to manage environment URLs, credentials, test data paths, and execution settings.

Support execution across multiple environments (e.g., Dev, QA, Staging, Prod).

Simplify environment switching using config flags.



