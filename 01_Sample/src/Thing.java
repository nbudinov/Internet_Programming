
public class Thing {
	
	private int size;
	private int heads, legs, countThings;
	
	Thing( int size, int heads, int legs )
	{
		this.setSize(size);
		this.setHeads(heads);
		this.setLegs(legs);		
	}
	
	public boolean equals( Object something )
	{
		boolean result = false;
		
		if( !(something instanceof Thing) ) {
			System.out.println( " not a Thing " );
			result =  false;
		}
		
		if( this.size == ((Thing) something).getSize() && 
			this.heads == ( (Thing) something ).getHeads() &&
			this.legs == ( (Thing) something ).getLegs() )
		{
			result = true;
		}
		else result = false;
		
		return result;		
	}

	
	void IfCondition( int a, int b )	{
		
		if( a > b )
		{
			System.out.println(" a is bigger ");			
		}
		else
			System.out.println(" b is bigger ");
	}



	public int getLegs() {
		return legs;
	}



	public void setLegs(int legs) {
		this.legs = legs;
	}



	public int getHeads() {
		return heads;
	}



	public void setHeads(int heads) {
		this.heads = heads;
	}



	public int getSize() {
		return size;
	}



	public void setSize(int size) {
		this.size = size;
	}


	
	
}


