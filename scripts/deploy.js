const hre = require('hardhat')
async function main() {
    const [deployer] = await hre.ethers.getSigners()

    console.log(
        'Deploying contracts with the account:',
        deployer.address
    )
    const WavePortal = await hre.ethers.getContractFactory('WavePortal')
    const wave = WavePortal.deploy()

    await (await wave).deployed
    console.log('Wvae portal deploye to :', (await wave).address)
}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error)
    process.exit(1)
})

