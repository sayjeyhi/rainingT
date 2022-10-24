## Integration testing
> Mostly done by QA team 🔭

Integration testing is the phase in software testing in which individual software modules are combined and tested as a group.
Most of the time this test is done by testers. And they test the feature with some methodologies like:

### Big Bang Approach:
Big Bang Testing is an Integration testing approach in which all the components or modules are integrated together at once and then tested as a unit. This combined set of components is considered as an entity while testing. If all of the components in the unit are not completed, the integration process will not execute.

**Advantages**:

- Convenient for small systems.

**Disadvantages**:

- Fault Localization is difficult.
- Given the sheer number of interfaces that need to be tested in this approach, some interfaces link to be tested could be missed easily.
- Since the Integration testing can commence only after “all” the modules are designed, the testing team will have less time for execution in the testing phase.
- Since all modules are tested at once, high-risk critical modules are not isolated and tested on priority. Peripheral modules which deal with user interfaces are also not isolated and tested on priority.

### Incremental Approach
In the Incremental Testing approach, testing is done by integrating two or more modules that are logically related to each other and then tested for proper functioning of the application. Then the other related modules are integrated incrementally and the process continues until all the logically related modules are integrated and tested successfully.
Incremental Approach, in turn, is carried out by two different Methods:

- Bottom Up
- Top Down
- Sandwich Approach – Combination of Top Down and Bottom Up

Before each of these testing methods you need to specify the test case, like look at this test case description:

| ID | Test Case Objective                                                  | Test Case Description                                   | Expected Result                                          |
  |----|----------------------------------------------------------------------|---------------------------------------------------------|----------------------------------------------------------|
| 1  | Check the interface link between the Login and Mailbox module        | Enter login credentials and click on the Login button   | To be directed to the Mail Box                           |
| 2  | Check the interface link between the Mailbox and Delete Mails Module | From Mailbox select the email and click a delete button | Selected email should appear in the Deleted/Trash folder |
