describe('DataRangePicker component', () => {
  beforeEach(() => {
    // visit DataRangePicker story in Storybook
    cy.visit('http://localhost:6006?path=/story/daterangepicker-drp--default&full=1');
  });

  it('Should change values when user selects start and end date as a range', () => {
    cy.getIframeBody().findByTestId('startDate').focus();
    
    // click to set start date
    cy.getIframeBody().find('[aria-label*="August 23, 2020"]').click();

    // go to next month, then click to set end date
    cy.getIframeBody().findByTestId('nextButton').click();
    cy.getIframeBody().find('[aria-label*="September 30, 2020"]').click();

    cy.getIframeBody().findByTestId('startDate').should('have.value', '08/23/2020');
    cy.getIframeBody().findByTestId('endDate').should('have.value', '09/30/2020');
  });
});