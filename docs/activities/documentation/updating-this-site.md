# Updating This Site

To update or add new pages you will need the following:

* A `@cps.gov.uk` email address.
* A GitHub account with your `@cps.gov.uk` [email added](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account).
* You have been added to the Azure AD group for this GitHub Organisation
* An accepted invitation to the [CPS-Innovation](https://github.com/CPS-Innovation) GitHub organisation (This is not self serve).
* You have been given "write" access to the [CPS SOP Repository](https://github.com/CPS-Innovation/digital-sop).

## Editing existing pages

To edit the content of an existing page

1. Navigate to the page you wish to edit.
2. Click the :material-file-edit-outline: icon in the upper right of the page.
3. Make changes to the page, for guidance on formatting see the [Markdown Guide](https://www.markdownguide.org/cheat-sheet/).
4. Once you have made your alterations, click "Commit changes..." in the upper right. 
5. In the following dialog, describe your changes, select "Create a new branch" and give it an appropriate name.
6. Once you are happy click "Propose changes" and your changes will be ready for review.

You should then notify another person with access to the GitHub organisation who will review your changes, possibly 
suggesting alterations. Once your changes have been reviewed and merged, it will take up to three minutes for them to
reflect on the live website.

## Creating a new page

To create a new page, visit the [GitHub repository](https://github.com/CPS-Innovation/digital-sop/tree/main/docs) and
navigate to the folder where you wish to create the new page. 

1. Click "Add file" in the upper right.
2. Click "Create new file" in the menu that appears.
3. Give your new file a name, ensuring it follows the formatting standards.
    * All lower case.
    * Hyphen separated words.
    * Ends with `.md`.
    * E.g. `my-new-doc.md`.
4. Add content to the new file, for guidance on formatting see the [Markdown Guide](https://www.markdownguide.org/cheat-sheet/).
5. Once you have made your alterations, click "Commit changes..." in the upper right. 
6. In the following dialog, describe your changes, select "Create a new branch" and give it an appropriate name.
7. Once you are happy click "Propose changes" and your changes will be ready for review.

You should then notify another person with access to the GitHub organisation who will review your changes, possibly 
suggesting alterations. Once your changes have been reviewed and merged, it will take up to three minutes for them to
reflect on the live website.

## Advanced

For developers who have git installed, you can follow a more advanced approach to adding and editing content.

You will need `python >= 3.11.4` installed to follow this guide.

1. Clone the SOP repository `git clone https://github.com/CPS-Innovation/digital-sop.git`.
2. Install requirements `pip install -r requirements.txt`.
3. Create a new branch for you changes `git checkout -b <name-of-branch>`.
4. And run the development server `mkdocs serve`.
5. You can now visit [http://localhost:8000](http://localhost:8000) to view your local copy.
6. Make changes to or add any files you deem necessary, when you save your changes, the local website will refresh.
7. Once you are happy with your changes, push them to GitHub `git push`.
8. Then visit [the repository](https://github.com/CPS-Innovation/digital-sop) and raise a pull request with your branch. 

You should then notify another person with access to the GitHub organisation who will review your changes, possibly 
suggesting alterations. Once your changes have been reviewed and merged, it will take up to three minutes for them to
reflect on the live website.
