// contracts/TokenBalanceUtility.sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "hardhat/console.sol";

interface ERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract TokenBalanceUtility {
    struct TokenBalance {
        address token;
        uint balance;
    }

    function getBalances(
        address _user,
        address[] memory _tokensAddresses
    ) public view returns (TokenBalance[] memory) {
        TokenBalance[] memory responseArray = new TokenBalance[](
            _tokensAddresses.length
        );
        for (uint i = 0; i < _tokensAddresses.length; i++) {
            responseArray[i].token = _tokensAddresses[i];
            responseArray[i].balance = IERC20(_tokensAddresses[i]).balanceOf(_user);
        }
        return responseArray;
    }
}
