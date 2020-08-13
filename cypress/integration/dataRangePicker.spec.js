describe('DataRangePicker component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006?path=/story/daterangepicker-drp--default&full=1');
  });

  it('Should change dates when user selects start and end date as a range', () => {
    cy.getIframeBody().find('#startDate').focus();
    cy.getIframeBody().find('[aria-label*="August 23, 2020"]').click();
    cy.getIframeBody().find('[aria-label*="August 29, 2020"]').click();

    cy.getIframeBody().find('#startDate').should('have.value', '08/23/2020');
    cy.getIframeBody().find('#endDate').should('have.value', '08/29/2020');
  });
});