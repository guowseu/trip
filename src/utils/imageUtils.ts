// Map of image IDs to local paths
const imageMap: Record<string, string> = {
  'photo-1476224203421-9ac39bcb3327': require('../images/photo-1476224203421-9ac39bcb3327.jpg'),
  'photo-1476514525535-07fb3b4ae5f1': require('../images/photo-1476514525535-07fb3b4ae5f1.jpg'),
  'photo-1488085061387-422e29b40080': require('../images/photo-1488085061387-422e29b40080.jpg'),
  'photo-1488646953014-85cb44e25828': require('../images/photo-1488646953014-85cb44e25828.jpg'),
  'photo-1493976040374-85c8e12f0c0e': require('../images/photo-1493976040374-85c8e12f0c0e.jpg'),
  'photo-1493976040374-85c8e12f92ce': require('../images/photo-1493976040374-85c8e12f92ce.jpg'),
  'photo-1493997181344-712f2f19d87a': require('../images/photo-1493997181344-712f2f19d87a.jpg'),
  'photo-1499856871958-5b9627545d1a': require('../images/photo-1499856871958-5b9627545d1a.jpg'),
  'photo-1502602898657-3e91760cbb34': require('../images/photo-1502602898657-3e91760cbb34.jpg'),
  'photo-1503614472-8c93d56e92ce': require('../images/photo-1503614472-8c93d56e92ce.jpg'),
  'photo-1503899036084-c55cdd92da26': require('../images/photo-1503899036084-c55cdd92da26.jpg'),
  'photo-1503917988258-f87a78e3c995': require('../images/photo-1503917988258-f87a78e3c995.jpg'),
  'photo-1504198322253-cfa87a0ff60f': require('../images/photo-1504198322253-cfa87a0ff60f.jpg'),
  'photo-1519791883288-dc8bd696e667': require('../images/photo-1519791883288-dc8bd696e667.jpg'),
  'photo-1520939817895-060bdaf4fe1b': require('../images/photo-1520939817895-060bdaf4fe1b.jpg'),
  'photo-1524396309943-e03f5249f002': require('../images/photo-1524396309943-e03f5249f002.jpg'),
  'photo-1524413840807-0c3cb6fa808d': require('../images/photo-1524413840807-0c3cb6fa808d.jpg'),
  'photo-1524995997946-a1c2e315a42f': require('../images/photo-1524995997946-a1c2e315a42f.jpg'),
  'photo-1526289034009-0240ddb68ce3': require('../images/photo-1526289034009-0240ddb68ce3.jpg'),
  'photo-1528360983277-13d401cdc186': require('../images/photo-1528360983277-13d401cdc186.jpg'),
  'photo-1529042410759-befb1204b468': require('../images/photo-1529042410759-befb1204b468.jpg'),
  'photo-1534008897995-27a23e859048': require('../images/photo-1534008897995-27a23e859048.jpg'),
  'photo-1535713875002-d1d0cf377fde': require('../images/photo-1535713875002-d1d0cf377fde.jpg'),
  'photo-1536098561742-ca998e48cbcc': require('../images/photo-1536098561742-ca998e48cbcc.jpg'),
  'photo-1536599018102-9f803c140fc1': require('../images/photo-1536599018102-9f803c140fc1.jpg'),
  'photo-1540189549336-e6e99c3679fe': require('../images/photo-1540189549336-e6e99c3679fe.jpg'),
  'photo-1542051841857-5f90071e7989': require('../images/photo-1542051841857-5f90071e7989.jpg'),
  'photo-1545569341-9eb8b30979d9': require('../images/photo-1545569341-9eb8b30979d9.jpg'),
  'photo-1550340499-a6c60fc8287c': require('../images/photo-1550340499-a6c60fc8287c.jpg'),
  'photo-1551641506-ee5bf4cb45f1': require('../images/photo-1551641506-ee5bf4cb45f1.jpg'),
  'photo-1570521462033-3015e76e7432': require('../images/photo-1570521462033-3015e76e7432.jpg'),
  'photo-1576675466969-38eeae4b41f6': require('../images/photo-1576675466969-38eeae4b41f6.jpg'),
  'photo-1579027989536-b7b1f875659b': require('../images/photo-1579027989536-b7b1f875659b.jpg'),
  'photo-1598935888738-cd2a3c61e91d': require('../images/photo-1598935888738-cd2a3c61e91d.jpg'),
  'photo-1611143669185-af224c5e3252': require('../images/photo-1611143669185-af224c5e3252.jpg'),
};

/**
 * Get the local image path from a remote URL
 * @param url The remote image URL
 * @returns The local image path
 */
export const getLocalImagePath = (url: string): string => {
  // Extract the photo ID from the URL
  const match = url.match(/photo-[^?]*/);
  if (match && match[0] && imageMap[match[0]]) {
    return imageMap[match[0]];
  }
  
  // Return the original URL if no local image is found
  return url;
};

export default getLocalImagePath;
