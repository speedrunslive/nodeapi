'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Players', [{
      name: 'sushi',
      accountType: 'Admin',
      twitter: 'sushi',
      youtube: '',
      country: 'None',
    }, {
      name: 'Sluip',
      accountType: 'Admin',
      twitter: 'Sluip',
      youtube: '',
      country: 'None',
    }, {
      name: 'Jiano',
      accountType: 'Admin',
      twitter: 'Jiano',
      youtube: 'SunJiano',
      country: 'United States of America',
    }], {});
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Players', null, {});
  }
};
