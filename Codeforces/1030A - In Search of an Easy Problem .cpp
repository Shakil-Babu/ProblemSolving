#include<bits/stdc++.h>
#include <cstring>
using namespace std;
int main()
{
   int n,a,zero = 0,one = 0; cin >> n ;
   for(int i = 0; i<n; i++){
        cin >> a;
        if(n == 1 && a == 0){
            cout << "easy" << endl;
        }else if(n == 1 && a == 1){
            cout << "hard" << endl;
        }else if(a == 0){
            zero++;
        }else if(a == 1){
            one++;
        }

   }
    if(zero == n){
        cout << "easy" << endl;
    }else if(one == n ){
        cout << "hard" << endl;
    }else if(one > 0){
        cout << "hard" << endl;
    }
    return 0;
}
