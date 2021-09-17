#include<bits/stdc++.h>
#include <cstring>
using namespace std;
int main()
{
   string t, w; cin >> t >> w;
   reverse(w.begin(), w.end());

    if(t == w){
        cout << "YES" << endl;
    }else{
        cout << "NO" << endl;
    }
    return 0;
}
