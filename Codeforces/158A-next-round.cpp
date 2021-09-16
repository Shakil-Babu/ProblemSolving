#include<bits/stdc++.h>
using namespace std;
int main()
{
	int n,k,a, arr[1000];
	cin>>n>>k;
    int output = 0;
	for(int i=1;i<=n;i++){
        cin >> a;
        arr[i] = a;
	}

	for(int j = 1; j<= n; j++){
        if(arr[j] >= arr[k] && arr[j] > 0){
           output ++;
        }
	}
	cout << output ;
    return 0;
}
