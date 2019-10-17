
export default function(spec) {

  spec.describe('Demo Screen', function() {

    spec.it('works', async function() {
      
      await spec.fillIn('App.email', 'fabiofns@gmail.com');
      await spec.fillIn('App.password', 'mypassword');
      await spec.fillIn('App.search', 'Search TEXT');

      await spec.press('App.button');
    });
  });
}