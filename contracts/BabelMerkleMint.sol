// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract BabelMerkleMint is ERC721 {
    bytes32 public immutable root;

    constructor(bytes32 merkleroot) ERC721("Babel", "LIB") {
        root = merkleroot;
    }

    function claim(
        address to,
        uint256 tokenId,
        bytes32[] calldata proof
    ) external {
        require(_verify(_leaf(to, tokenId), proof), "Invalid merkle proof");
        _safeMint(to, tokenId);
    }

    function _leaf(address account, uint256 tokenId) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked(tokenId, account));
    }

    function _verify(bytes32 leaf, bytes32[] memory proof) internal view returns (bool) {
        return MerkleProof.verify(proof, root, leaf);
    }
}
