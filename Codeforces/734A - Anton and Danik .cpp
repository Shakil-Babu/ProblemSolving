#include<bits/stdc++.h>
using namespace std;
int main()
{
   int n , a = 0, d = 0; cin >> n ;
   char s;
   for(int i = 0; i<n; i++){
        cin >> s;

        if(s == 'A'){
            a++;
        }else{
            d++;
        }
   }

   if(a == d){
        cout << "Friendship" << endl;
   }else if(a > d){
        cout << "Anton" << endl;
   }else{
        cout << "Danik" << endl;
   }
    return 0;
}
