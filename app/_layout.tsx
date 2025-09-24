import { View, Text } from 'react-native'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import '../global.css';
import { Stack } from 'expo-router';

const RootLayaout = () => {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{
        headerShown: false
      }} />
    </QueryClientProvider>
  )
}

export default RootLayaout