import { ApolloError, NetworkStatus } from "@apollo/client";

/**
 * @param {NetworkStatus} networkStatus - the `networkStatus` returned from the `@apollo/client` hook
 *
 * When `notifyOnNetworkStatusChange` is set to true on the config of an `@apollo/client` hook, the `networkStatus` will be updated
 * We want to use it, rather than `loading` because `loading` is only true on the first load, and not on subsequent refetches.
 */

const getApolloStatuses = (
  networkStatus: NetworkStatus,
  isLoading: boolean,
  apolloError: ApolloError | undefined,
) => {
  const loading =
    isLoading ||
    networkStatus === NetworkStatus.loading ||
    networkStatus === NetworkStatus.refetch;

  const areActionsDisabled =
    networkStatus === NetworkStatus.loading ||
    networkStatus === NetworkStatus.error ||
    networkStatus === NetworkStatus.refetch;

  const error = apolloError !== undefined || networkStatus === NetworkStatus.error;

  const isFetchingMore = networkStatus === NetworkStatus.fetchMore;

  return { loading, error, areActionsDisabled, isFetchingMore };
};

export { getApolloStatuses };
