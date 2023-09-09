// eslint-disable-next-line no-undef
const Migrations = artifacts.require("Migrations");
// eslint-disable-next-line no-undef
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed()
  // Mint 1,000 Dai Tokens for the deployer
  await tokenMock.mint(
    '0xD5CaaBB6105c9a4CDCb31187753d68dF96D1e6f7',
    '10000000000000000000000000'
  )
};
