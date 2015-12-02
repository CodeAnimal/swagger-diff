
export default function deleteOperationId({kind, path, lhs, rhs}) {
  const match = kind === 'D'
              && path.length === 4
              && path[0] === 'paths'
              && path[3] === 'operationId';
  if (match) {
    const pathId = path[1];
    const method = path[2];
    return `${pathId} (${method}) - OperationId (${lhs}) deleted`;
  }
  return false;
}
