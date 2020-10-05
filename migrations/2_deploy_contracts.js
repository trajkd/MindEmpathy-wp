const MEcoin = artifacts.require("./MEcoin.sol");

module.exports = function(deployer) {
	deployer.deploy(MEcoin);
};