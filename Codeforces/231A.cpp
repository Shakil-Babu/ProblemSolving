#include<bits/stdc++.h>
using namespace std;

int main()
{
	int t,a,b,c;
	int count = 0;
	cin>>t;

	for(int i=1;i<=t;i++){
		cin>>a>>b>>c;
		if((a == 1 && b == 1) || (a == 1 && c == 1) || (b == 1 && c == 1)){
            count = count + 1;
		}
	}

	cout << count ;


}
