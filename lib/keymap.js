
var forward = {
  'n': 'node_id',
  'w': 'way_id',
  'r': 'relation_id',
  'v': 'version', // Version
  'd': 'deleted', // Deleted flag ('V' - visible or 'D' - deleted)
  'c': 'changeset', // Changeset ID
  't': 'timestamp', // Timestamp (ISO Format)
  'i': 'user_id', // User ID
  'u': 'username', // Username
  'T': 'tags', // Tags
  'x': 'longitude', // Longitude (nodes only)
  'y': 'latitude', // Latitude (nodes only)
  'N': 'nodes', // Nodes (ways only)
  'M': 'members' // Members (relations only)
}

// generate inverse map
var reverse = {}
for( var key in forward ) reverse[ forward[ key ] ] = key;

module.exports.expand = forward;
module.exports.collapse = reverse;
