class Solution {
public:
     int searchInsert(vector<int>& nums, int target) {
    int *arr = nums.data();
    int left = 0, right = nums.size() - 1, mid;
    while(left <= right){
        mid = (left + right) / 2;

        if(arr[mid] == target){
            return mid;
        }
        if(arr[mid] > target){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return left;
}
};