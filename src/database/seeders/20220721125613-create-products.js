'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('products',[
        {
          namaProduk: "Laptop A 14x Pro",
          deskripsi: "Spesifikasi : Windows 11",
          stok: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          tersedia: true,
        },
        {
          namaProduk: "Laptop A 16x Pro",
          deskripsi: "Spesifikasi : Windows 12",
          stok: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
          tersedia: true,
        },
        {
          namaProduk: "Laptop A 16x Promax",
          deskripsi: "Spesifikasi : Windows 13",
          stok: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
          tersedia: true,
        },
        {
          namaProduk: "Laptop B 14 XPro",
          deskripsi: "Spesifikasi : Windows 10",
          stok: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
          tersedia: true,
        },
        {
          namaProduk: "Laptop B 16 xPro",
          deskripsi: "Spesifikasi : Windows 11",
          stok: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          tersedia: false,
        },
      ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('products', null, {});
  }
};
