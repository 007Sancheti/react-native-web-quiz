import { Dripsy } from './dripsy'
import { View } from 'dripsy'
import { NavigationProvider } from './navigation'
import { QueryProvider } from './react-query'
import { ReduxProvider } from './redux'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <NavigationProvider>
        <QueryProvider>
          <Dripsy>
            <View
              sx={{
                flex: 1,
                backgroundColor: '$background',
              }}
            >
              {children}
            </View>
          </Dripsy>
        </QueryProvider>
      </NavigationProvider>
    </ReduxProvider>
  )
}
