#include<bits/stdc++.h>
#include <cstring>
using namespace std;
int main()
{
   long long n; cin >> n ;
   long long o;
    if(n%2 == 1){
        o = -(n+1)/2;
    }else{
        o = n/2;
    }
   cout << o ;

    return 0;
}
