/**
 * Track the trade of a bond from one company to another
 * @param {org.gnothi.mynetwork.Trade} trade - the trade to be processed
 * @transaction
 */
async function tradeBond(trade) {
    trade.bond.owner = trade.newOwner;
    let assetRegistry = await getAssetRegistry('org.gnothi.mynetwork.Bond');
    await assetRegistry.update(trade.bond);
}