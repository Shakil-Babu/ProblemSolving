    #include<bits/stdc++.h>
    using namespace std;
    int main()
    {
    	int n, x = 0;
    	cin >> n;
    	string s ;
    	for(int i=1;i<=n;i++){
            cin >> s;
     
            if(s == "++X"){
                ++x;
            }else if(s == "X++"){
                x++;
            }else if(s == "--X"){
                --x;
            }else{
                x--;
            }
    	}
     
        cout << x;
        return 0;
    }